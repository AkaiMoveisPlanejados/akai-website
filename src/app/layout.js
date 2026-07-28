/* eslint-disable @next/next/next-script-for-ga */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import structuredData from "./data/akai-structured-data.json";
import { faq } from "./data/faq";
import { projetos } from "./data/projetos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.akaimoveis.com.br";

// FAQPage montado a partir de data/faq.js, o mesmo arquivo que a seção de
// perguntas renderiza — assim o texto marcado nunca diverge do texto visível.
const schema = {
  ...structuredData,
  "@graph": [
    ...structuredData["@graph"],
    {
      // Portfólio. Aponta para imagens do próprio domínio — até 27/07/2026
      // este nó listava CreativeWork hospedado no Pinterest, o que declarava
      // ao Google que os projetos da Akai eram conteúdo de terceiro.
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projetos`,
      name: "Nossos Projetos",
      description:
        "Ambientes planejados e modulados executados pela Akai Móveis em Sapucaia do Sul e região.",
      numberOfItems: projetos.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: projetos.map((p, i) => {
        // termo do ambiente + tipo, para associar cada foto às palavras-chave
        // principais: "cozinha planejada" e "cozinha modulada"
        const ambiente = {
          cozinhas: "cozinha",
          quartos: "dormitório",
          banheiros: "banheiro",
          salas: "sala",
        }[p.categoria];
        const termo = `${ambiente} ${p.tipo}`;

        return {
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "ImageObject",
            "@id": `${SITE_URL}/#projeto-${p.id}`,
            name: p.titulo,
            description: p.descricao,
            contentUrl: `${SITE_URL}${p.imagens[0].src}`,
            // projetos com mais de uma foto do mesmo ambiente
            ...(p.imagens.length > 1
              ? {
                  associatedMedia: p.imagens.slice(1).map((img) => ({
                    "@type": "ImageObject",
                    contentUrl: `${SITE_URL}${img.src}`,
                    ...(img.legenda ? { caption: img.legenda } : {}),
                  })),
                }
              : {}),
            representativeOfPage: false,
            keywords: [
              termo,
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
            ...(p.fabricante
              ? {}
              : { creator: { "@id": `${SITE_URL}/#organization` } }),
          },
        };
      }),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      inLanguage: "pt-BR",
      mainEntity: faq.map((item, i) => ({
        "@type": "Question",
        "@id": `${SITE_URL}/#faq-${i + 1}`,
        name: item.pergunta,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.resposta.join(" "),
        },
      })),
    },
  ],
};
const TITLE =
  "Cozinhas Planejadas e Moduladas em Sapucaia do Sul | Akai Móveis";
const DESCRIPTION =
  "Cozinhas planejadas e moduladas em Sapucaia do Sul desde 2009. Projeto e orçamento gratuitos, equipe própria de montagem e móveis 100% MDF. Até 18x sem juros.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "v2yAMA1wlnQPun3SJuStHnhspxPipRjAvQYcMe8uSCY",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Akai Móveis e Ambientes Planejados",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Cozinha planejada executada pela Akai Móveis em Sapucaia do Sul",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1005001799"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-1005001799');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5D7VWGG9');`,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1686648795328693');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1686648795328693&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5D7VWGG9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

