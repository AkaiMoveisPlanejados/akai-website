import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate/EmailTemplate';

// O spam que chega aqui nao e bot cego: e prospeccao comercial automatizada, que
// abre a pagina num navegador headless e preenche os campos. Por isso conferir
// Origin nao resolve — a requisicao vem do site mesmo. O que separa esse trafego
// de um cliente de verdade e o conteudo: link na mensagem, texto em ingles,
// formulario respondido em menos tempo do que um humano leva para ler.

const SEGUNDOS_MINIMOS = 3;
const LIMITE_POR_IP = 3;
const JANELA_MS = 60 * 60 * 1000;

// Palavras de ingles que nao existem em portugues. Tres ou mais numa mensagem e
// sinal forte: o cliente da Akai escreve em portugues.
const PALAVRAS_INGLES = [
  'the', 'your', 'you', 'we', 'our', 'would', 'here', 'help', 'business',
  'businesses', 'website', 'websites', 'improve', 'quick', 'few', 'great',
  'grab', 'share', 'ideas', 'looking', 'took', 'saw', 'could', 'better',
  'content', 'time', 'about', 'with', 'have', 'from', 'this', 'and',
];

// Contador por IP. Na Vercel cada instancia tem o seu, entao isso nao e um rate
// limit confiavel — e um freio contra rajada na mesma instancia. Protecao de
// verdade contra volume seria no edge.
const acessos = new Map();

const limiteEstourado = (ip) => {
  if (!ip) return false;
  const agora = Date.now();
  const registros = (acessos.get(ip) || []).filter((t) => agora - t < JANELA_MS);
  registros.push(agora);
  acessos.set(ip, registros);
  if (acessos.size > 500) {
    for (const [chave, ts] of acessos) {
      if (ts.every((t) => agora - t >= JANELA_MS)) acessos.delete(chave);
    }
  }
  return registros.length > LIMITE_POR_IP;
};

// So URL explicita. A versao anterior pegava qualquer coisa com ".com" e barrava
// cliente que repetia o proprio email na mensagem, ou escrevia "apto.com 2
// quartos". Endereco de email no texto e comportamento normal de quem quer
// contato — nao pode ser motivo de descarte.
const temLink = (texto = '') =>
  /https?:\/\/\S+|\bwww\.[a-z0-9-]+\.[a-z]{2,}/i.test(texto);

const pareceIngles = (texto = '') => {
  const palavras = texto.toLowerCase().match(/[a-z']+/g) || [];
  if (palavras.length < 8) return false;
  const achadas = new Set(palavras.filter((p) => PALAVRAS_INGLES.includes(p)));
  return achadas.size >= 3;
};

// Aceita fixo (10) e celular (11). Rejeita repeticao do mesmo digito.
const telefoneValido = (telefone = '') => {
  const digitos = telefone.replace(/\D/g, '');
  if (digitos.length < 10 || digitos.length > 11) return false;
  if (/^(\d)\1+$/.test(digitos)) return false;
  const ddd = Number(digitos.slice(0, 2));
  return ddd >= 11 && ddd <= 99;
};

const emailValido = (email = '') =>
  /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email) && email.length <= 254;

// Duas respostas diferentes, e a distincao importa mais que as regras em si.
//
// descartar(): para sinal de automacao — honeypot, tempo, link, idioma. Devolve
// 200 fingindo sucesso, porque um 400 ensinaria a ferramenta do outro lado o que
// mudar. Nao existe humano nesse caminho para ficar sem resposta.
const descartar = (motivo, dados) => {
  console.warn('[contato] descartado:', motivo, {
    nome: dados?.name,
    email: dados?.email,
  });
  return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
};

// recusar(): para campo mal preenchido. Aqui quase sempre tem uma pessoa do outro
// lado que errou o telefone e precisa saber disso. Silenciar aqui custa um lead:
// a pessoa le "enviado com sucesso", vai embora e nunca e respondida.
const recusar = (mensagem) =>
  NextResponse.json({ error: mensagem }, { status: 400 });

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Missing RESEND_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, city, message, subject, website, abertoEm } = body;

    // Campo escondido no formulario. Humano nunca ve; automacao preenche tudo que
    // encontra — e ferramenta de prospeccao B2B gosta especialmente de "website".
    if (website) return descartar('honeypot', body);

    const decorrido = Number(abertoEm) ? (Date.now() - Number(abertoEm)) / 1000 : null;
    if (decorrido !== null && decorrido < SEGUNDOS_MINIMOS) {
      return descartar(`rapido demais (${decorrido.toFixed(1)}s)`, body);
    }

    // Daqui para baixo, erro de preenchimento volta visivel para a pessoa.
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !city?.trim()) {
      return recusar('Preencha nome, email, telefone e cidade.');
    }

    if (!emailValido(email)) {
      return recusar('Confira o email: parece estar incompleto.');
    }

    if (!telefoneValido(phone)) {
      return recusar('Confira o telefone: informe DDD e numero, como (51) 98115-0097.');
    }

    // Volta a ser descarte silencioso: sinal de automacao, nao erro de digitacao.
    if (temLink(message) || temLink(name) || temLink(city)) {
      return descartar('link na mensagem', body);
    }

    if (pareceIngles(message)) return descartar('mensagem em ingles', body);

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    if (limiteEstourado(ip)) return descartar('limite por IP', body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['akaimoveiseplanejados@gmail.com'],
      subject: `Novo Contato: ${name} - ${subject}`,
      react: EmailTemplate({ name, email, phone, city, message, subject }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
