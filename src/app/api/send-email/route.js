import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate/EmailTemplate';

// O formulario recebe 1 ou 2 preenchimentos por mes. Nesse volume, barrar um lead
// por engano custa metade do mes; deixar um spam passar custa apertar delete. Por
// isso quase nada aqui bloqueia:
//
// - honeypot bloqueia, porque humano nao tem como preencher um campo que esta
//   fora da tela. Falso positivo e impossivel.
// - campo mal preenchido volta com erro visivel. Nao e bloqueio, e aviso: sem
//   telefone certo o lead esta perdido de qualquer forma.
// - o resto virou marcacao. Mensagem em ingles ou enviada em 1 segundo levanta
//   suspeita, nao veredito: o email chega com aviso no assunto e quem decide e o
//   Rafael, olhando.
//
// O que me fez recuar: link na mensagem era bloqueio, e cliente de moveis manda
// referencia de Pinterest. "Quero uma cozinha assim: pin.it/xyz" e o lead mais
// qualificado que existe, e estava sendo descartado em silencio.

const SEGUNDOS_MINIMOS = 3;

// Palavras de ingles que nao existem em portugues. Tres ou mais e sinal de que a
// mensagem nao foi escrita por cliente da regiao.
const PALAVRAS_INGLES = [
  'the', 'your', 'you', 'we', 'our', 'would', 'here', 'help', 'business',
  'businesses', 'website', 'websites', 'improve', 'quick', 'few', 'great',
  'grab', 'share', 'ideas', 'looking', 'took', 'saw', 'could', 'better',
  'content', 'about', 'with', 'have', 'from', 'this',
];

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

    // Unico bloqueio. Devolve 200 fingindo sucesso: com 400, a ferramenta do outro
    // lado descobriria o campo e passaria a ignora-lo.
    if (website) {
      console.warn('[contato] honeypot:', { nome: name, email });
      return NextResponse.json(
        { message: 'Email sent successfully!' },
        { status: 200 }
      );
    }

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !city?.trim()) {
      return recusar('Preencha nome, email, telefone e cidade.');
    }

    if (!emailValido(email)) {
      return recusar('Confira o email: parece estar incompleto.');
    }

    if (!telefoneValido(phone)) {
      return recusar('Confira o telefone: informe DDD e numero, como (51) 98115-0097.');
    }

    // Daqui para baixo nada impede o envio — so anota no assunto.
    const suspeitas = [];

    const decorrido = Number(abertoEm) ? (Date.now() - Number(abertoEm)) / 1000 : null;
    if (decorrido !== null && decorrido < SEGUNDOS_MINIMOS) {
      suspeitas.push(`enviado em ${decorrido.toFixed(1)}s`);
    }

    if (pareceIngles(message)) suspeitas.push('mensagem em ingles');

    const aviso = suspeitas.length ? `[possivel spam: ${suspeitas.join(', ')}] ` : '';
    if (aviso) console.warn('[contato] marcado:', suspeitas.join(', '), { nome: name });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['akaimoveiseplanejados@gmail.com'],
      subject: `${aviso}Novo Contato: ${name} - ${subject}`,
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
