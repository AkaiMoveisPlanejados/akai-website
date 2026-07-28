// Montagem do JSON-LD.
//
// O grafo é dividido em duas partes: o que descreve a empresa, que vale em
// qualquer página do site, e o que descreve a página em si. Antes desta
// separação o layout injetava o WebPage e o FAQPage da home em todos os
// endereços — o que faria as páginas dedicadas declararem ao Google um conteúdo
// que não é o delas.

import estatico from "./akai-structured-data.json";
import { faq } from "./faq";
import { projetos } from "./projetos";

export const SITE_URL = "https://www.akaimoveis.com.br";

// Nós que descrevem a página inicial e não devem ser repetidos nas outras.
const DA_HOME = new Set([`${SITE_URL}/#webpage`, `${SITE_URL}/#breadcrumb`]);

// Os dois serviços vendidos. Existem como nós próprios porque cada foto do
// portfólio aponta para um deles pelo campo `about`, e uma referência a um @id
// ausente do grafo é ignorada pelo Google.
const servicos = [
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-planned-furniture`,
    name: "Móveis planejados sob medida",
    serviceType: "Móveis planejados",
    description:
      "Projeto, venda e montagem de móveis planejados sob medida em 100% MDF, com fita de borda em PVC, para cozinhas, dormitórios, closets, banheiros e salas.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@id": `${SITE_URL}/#store` },
    hasOfferCatalog: { "@id": `${SITE_URL}/#catalog-planned` },
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-modular-furniture`,
    name: "Móveis modulados",
    serviceType: "Móveis modulados",
    description:
      "Venda e montagem de móveis modulados, feitos com módulos de medidas padronizadas, com entrega mais rápida e custo menor que o sob medida.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@id": `${SITE_URL}/#store` },
    hasOfferCatalog: { "@id": `${SITE_URL}/#catalog-modular` },
  },
];

// Descreve a empresa. Entra em todas as páginas.
export const grafoGlobal = [
  ...estatico["@graph"].filter((n) => !DA_HOME.has(n["@id"])),
  ...servicos,
];

// Metadados de licença, que o Google usa no selo de licenciamento do Google
// Imagens. Só declaramos direito autoral e licença sobre as fotos que são
// nossas: nas cedidas por fornecedor os direitos são deles, e a Akai tem
// autorização de uso mas não pode licenciar para terceiros.
const licenca = (p) => {
  if (!p.fabricante) {
    return {
      creditText: "Akai Móveis e Ambientes Planejados",
      copyrightNotice: "© Akai Móveis e Ambientes Planejados",
      copyrightHolder: { "@id": `${SITE_URL}/#organization` },
      license: `${SITE_URL}/licenca-de-imagens`,
      acquireLicensePage: `${SITE_URL}/licenca-de-imagens`,
    };
  }
  if (p.credito) {
    return {
      creditText: `${p.credito} — imagem cedida à Akai Móveis`,
      copyrightNotice: `© ${p.credito}`,
      acquireLicensePage: `${SITE_URL}/licenca-de-imagens`,
    };
  }
  // fornecedor não identificado: creditamos o que sabemos e paramos aí, em vez
  // de declarar um direito autoral que não é nosso só para calar o aviso
  return {
    creditText: "Imagem cedida por fornecedor parceiro",
    acquireLicensePage: `${SITE_URL}/licenca-de-imagens`,
  };
};

// Uma foto do portfólio. `base` é o @id da página que a exibe, para que a
// mesma foto não colida quando aparecer na home e na página do ambiente.
const imagemDoProjeto = (p, base) => {
  const ambiente = {
    cozinhas: "cozinha",
    quartos: "dormitório",
    banheiros: "banheiro",
    salas: "sala",
  }[p.categoria];

  return {
    ...licenca(p),
    "@type": "ImageObject",
    "@id": `${base}-${p.id}`,
    name: p.titulo,
    description: p.descricao,
    contentUrl: `${SITE_URL}${p.imagens[0].src}`,
    ...(p.imagens.length > 1
      ? {
          associatedMedia: p.imagens.slice(1).map((img) => ({
            "@type": "ImageObject",
            ...licenca(p),
            contentUrl: `${SITE_URL}${img.src}`,
            ...(img.legenda ? { caption: img.legenda } : {}),
          })),
        }
      : {}),
    representativeOfPage: false,
    keywords: [
      `${ambiente} ${p.tipo}`,
      p.tipo === "modulada" ? "móveis modulados" : "móveis planejados",
      "Sapucaia do Sul",
    ].join(", "),
    about: {
      "@id": `${SITE_URL}/#service-${
        p.tipo === "modulada" ? "modular" : "planned"
      }-furniture`,
    },
    // só declaramos autoria nas fotos de projetos executados pela Akai;
    // as cedidas por fornecedores ficam sem creator
    ...(p.fabricante ? {} : { creator: { "@id": `${SITE_URL}/#organization` } }),
  };
};

const listaDeFotos = ({ id, nome, descricao, itens, base }) => ({
  "@type": "ItemList",
  "@id": id,
  name: nome,
  description: descricao,
  numberOfItems: itens.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: itens.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: imagemDoProjeto(p, base),
  })),
});

const paginaDeFaq = (id, perguntas) => ({
  "@type": "FAQPage",
  "@id": id,
  inLanguage: "pt-BR",
  mainEntity: perguntas.map((item, i) => ({
    "@type": "Question",
    "@id": `${id}-${i + 1}`,
    name: item.pergunta,
    acceptedAnswer: { "@type": "Answer", text: item.resposta.join(" ") },
  })),
});

// Grafo da página inicial.
export const schemaHome = () => ({
  "@context": "https://schema.org",
  "@graph": [
    ...grafoGlobal,
    ...estatico["@graph"].filter((n) => DA_HOME.has(n["@id"])),
    listaDeFotos({
      id: `${SITE_URL}/#projetos`,
      nome: "Nossos Projetos",
      descricao:
        "Ambientes planejados e modulados executados pela Akai Móveis em Sapucaia do Sul e região.",
      itens: projetos,
      base: `${SITE_URL}/#projeto`,
    }),
    paginaDeFaq(`${SITE_URL}/#faq`, faq),
  ],
});

// Grafo de uma página dedicada de ambiente.
export const schemaLinha = (linha, fotos) => {
  const url = `${SITE_URL}/${linha.slug}`;
  const servico =
    linha.tipo === "modulada"
      ? `${SITE_URL}/#service-modular-furniture`
      : `${SITE_URL}/#service-planned-furniture`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...grafoGlobal,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url: `${url}`,
        name: linha.title,
        description: linha.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": servico },
        mainEntity: { "@id": `${url}#servico` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: `${SITE_URL}/`,
          },
          { "@type": "ListItem", position: 2, name: linha.nome, item: url },
        ],
      },
      // serviço específico desta página: o mesmo serviço geral, recortado para
      // um ambiente. É o nó que responde à busca "cozinha planejada em Sapucaia".
      {
        "@type": "Service",
        "@id": `${url}#servico`,
        name: linha.h1,
        serviceType: `${linha.ambiente} ${linha.tipo}`,
        description: linha.description,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@id": `${SITE_URL}/#store` },
        isSimilarTo: { "@id": servico },
        ...(fotos.length
          ? { image: fotos.map((p) => `${SITE_URL}${p.imagens[0].src}`) }
          : {}),
      },
      listaDeFotos({
        id: `${url}#projetos`,
        nome: `Projetos de ${linha.nome.toLowerCase()}`,
        descricao: linha.description,
        itens: fotos,
        base: `${url}#projeto`,
      }),
      paginaDeFaq(`${url}#faq`, linha.faq),
    ],
  };
};
