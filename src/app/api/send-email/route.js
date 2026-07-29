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

const temLink = (texto = '') =>
  /https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|io|co|br|xyz|info|site|online)\b/i.test(
    texto
  );

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

// Devolve 200 para o que foi barrado. Se respondesse 400, a ferramenta do outro
// lado aprenderia o que mudar e tentaria de novo.
const descartar = (motivo, dados) => {
  console.warn('[contato] descartado:', motivo, {
    nome: dados?.name,
    email: dados?.email,
  });
  return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
};

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

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !city?.trim()) {
      return descartar('campo obrigatorio vazio', body);
    }

    if (!emailValido(email)) return descartar('email invalido', body);
    if (!telefoneValido(phone)) return descartar('telefone invalido', body);

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
