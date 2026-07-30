// Avisa o IndexNow (Bing, Yandex e outros) que as paginas mudaram.
//
// Roda como postbuild: a cada deploy de producao na Vercel, manda a lista de
// URLs. Sem isso, o Bing so descobre a mudanca quando o robo passa de novo, o
// que leva de dias a semanas. O Google nao usa IndexNow — la o caminho continua
// sendo o Search Console.
//
// A chave e publica por definicao do protocolo: fica em public/<chave>.txt e
// qualquer um pode ler. E assim que o IndexNow confirma que quem manda o ping e
// dono do dominio.
//
// Nunca derruba o build. Se o ping falhar, o deploy segue e a pagina entra no
// indice pelo caminho lento.

import { linhas } from "../src/app/data/linhas.js";

const CHAVE = "3b868cb86fea43049d5875345030f234";
const SITE = "https://www.akaimoveis.com.br";
const HOST = "www.akaimoveis.com.br";

// Mesma lista do sitemap.js, da mesma fonte: se entrar pagina nova em linhas.js,
// entra aqui junto.
const urls = [
  `${SITE}/`,
  ...linhas.map((l) => `${SITE}/${l.slug}`),
  `${SITE}/licenca-de-imagens`,
];

const ambiente = process.env.VERCEL_ENV;
const forcar = process.env.INDEXNOW_FORCE === "1";

async function avisar() {
  // So producao pinga. Preview aponta para URLs de producao, entao o ping seria
  // sobre conteudo que nao e o do deploy; e build local rodaria a cada `npm run
  // build`, gastando cota a toa. INDEXNOW_FORCE=1 e a saida para testar de fora.
  if (!forcar && ambiente !== "production") {
    console.log(`[indexnow] ignorado: ambiente "${ambiente || "local"}"`);
    return;
  }

  const corpo = {
    host: HOST,
    key: CHAVE,
    keyLocation: `${SITE}/${CHAVE}.txt`,
    urlList: urls,
  };

  console.log(`[indexnow] enviando ${urls.length} URLs`);

  const resposta = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(corpo),
  });

  // 200 e 202 sao sucesso. Os outros dizem o que houve, e vale registrar o
  // motivo em vez de so o numero — daqui a seis meses ninguem lembra o que
  // significa 422.
  const motivos = {
    400: "formato invalido",
    403: "chave nao confere com o arquivo em /" + CHAVE + ".txt",
    422: "URL fora do host declarado, ou chave fora do padrao",
    429: "pings demais, tratado como spam",
  };

  if (resposta.status === 200 || resposta.status === 202) {
    console.log(`[indexnow] ok (${resposta.status})`);
  } else {
    console.warn(
      `[indexnow] recusado (${resposta.status}): ${motivos[resposta.status] || "motivo desconhecido"}`
    );
  }
}

avisar().catch((erro) => {
  console.warn("[indexnow] falhou:", erro.message);
});
