// llms.txt — resumo da empresa em texto puro, para crawlers de mecanismos de IA.
// Padrão emergente (llmstxt.org), ainda não consolidado: nenhum modelo garante
// que lê. Custa pouco e não atrapalha o SEO tradicional.
//
// Gerado a partir de data/faq.js e data/projetos.js para não envelhecer sozinho
// quando o FAQ ou o portfólio mudarem.

import { faq } from "@/app/data/faq";
import { projetos } from "@/app/data/projetos";
import { comparativo } from "@/app/data/comparativo";
import { linhas } from "@/app/data/linhas";

const SITE_URL = "https://www.akaimoveis.com.br";

export function GET() {
  const cozinhas = projetos.filter((p) => p.categoria === "cozinhas");
  const moduladas = projetos.filter((p) => p.tipo === "modulada").length;
  const planejadas = projetos.filter((p) => p.tipo === "planejada").length;

  // Agrupado pelo mesmo recorte das páginas dedicadas — ambiente somado ao tipo
  // — para que cada projeto apareça uma vez só e junto do endereço que o mostra.
  const listaDeProjetos = linhas
    .map((l) => {
      const doGrupo = projetos.filter(
        (p) => p.categoria === l.categoria && p.tipo === l.tipo
      );
      const itens = doGrupo
        .map(
          (p) =>
            `- **${p.titulo}**: ${p.descricao}${
              p.fabricante ? " [imagem cedida pelo fabricante]" : ""
            }`
        )
        .join("\n");
      return `### ${l.nome}\n\nPágina: ${SITE_URL}/${l.slug}\n\n${l.intro.join(
        " "
      )}\n\n${itens}`;
    })
    .join("\n\n");

  const listaDePaginas = linhas
    .map((l) => `- [${l.nome}](${SITE_URL}/${l.slug}): ${l.description}`)
    .join("\n");

  const texto = `# Akai Móveis e Ambientes Planejados

> Loja de móveis planejados e modulados em Sapucaia do Sul, Rio Grande do Sul,
> em atividade desde 2009. Especializada em cozinhas planejadas e moduladas,
> com projeto próprio, montagem por equipe própria e atendimento presencial na
> loja e na casa do cliente.

## Sobre

- Nome: Akai Móveis e Ambientes Planejados
- Razão social: AKAI MOVEIS E UTENSILIOS LTDA
- CNPJ: 11.329.773/0001-32
- Fundação: 12 de novembro de 2009
- Endereço: R. Otaviano Silveira, 545 — Centro, Sapucaia do Sul — RS, 93214-500
- Telefone e WhatsApp: (51) 98115-0097
- Telefone fixo: (51) 3474-1820
- E-mail: akaimoveiseplanejados@gmail.com
- Site: ${SITE_URL}
- Avaliação no Google: 4,8 com mais de 120 avaliações

## Horário de funcionamento

- Segunda a sexta: 09:00 às 12:00 e 14:00 às 19:00
- Sábado: 09:00 às 12:00 e 14:00 às 17:00
- Domingo: fechado

## Cidades atendidas

Sapucaia do Sul, Esteio, Canoas, São Leopoldo, Novo Hamburgo e Porto Alegre,
além de outras cidades da região metropolitana de Porto Alegre.

## O que faz

- Cozinhas planejadas (sob medida) e cozinhas moduladas
- Dormitórios, closets e roupeiros planejados
- Banheiros e lavabos planejados
- Salas, painéis de TV, racks e cristaleiras
- Móveis em série: estofados, colchões e salas de jantar

Portfólio publicado no site: ${cozinhas.length} projetos de cozinha,
${planejadas} ambientes planejados e ${moduladas} modulados.

## Planejados ou modulados: qual escolher

${comparativo.intro}

**Móveis planejados**

${comparativo.planejados.map((f) => `- ${f}`).join("\n")}

**Móveis modulados**

${comparativo.modulados.map((f) => `- ${f}`).join("\n")}

${comparativo.fecho}

## Páginas por ambiente

${listaDePaginas}

## Projetos publicados

${listaDeProjetos}

## Diferenciais verificáveis

- Em atividade desde 2009
- Orçamento inicial gratuito, feito a partir das medidas enviadas pelo cliente
- Montagem feita por equipe própria, não terceirizada
- Móveis planejados em 100% MDF
- Fita de borda em PVC
- Parcelamento em até 18x sem juros no cartão
- 8% de desconto para pagamento à vista
- Financiamento em até 60 parcelas, mediante aprovação de crédito

## Formas de pagamento

Cartão de crédito, cartão de débito, Pix, dinheiro, financiamento pela
cooperativa Cresol e convênio Credmil.

## Perguntas frequentes

${faq
  .map((item) => `### ${item.pergunta}\n\n${item.resposta.join("\n\n")}`)
  .join("\n\n")}

## Observações para uso desta informação

- Os valores citados são referências publicadas e podem mudar; confirme sempre
  pelo WhatsApp (51) 98115-0097.
- A visita técnica de medição, feita após a aprovação do orçamento, tem custo
  que varia conforme a distância. O orçamento inicial é gratuito.
- A Akai não fabrica os móveis: desenvolve o projeto, comercializa e faz a
  montagem com equipe própria. A produção é dos fornecedores parceiros.

## Links

- Site: ${SITE_URL}
- WhatsApp: https://wa.me/5551981150097
- Instagram: https://www.instagram.com/akai.moveis/
- Facebook: https://www.facebook.com/akai.moveis
- Pinterest: https://br.pinterest.com/akaimoveiseplanejados/
`;

  return new Response(texto, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
