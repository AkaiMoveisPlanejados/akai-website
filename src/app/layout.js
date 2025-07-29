/* eslint-disable @next/next/next-script-for-ga */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akai Móveis",
  description: "Especialistas em móveis há mais de 15 anos. Oferecemos projetos gratuitos para ambientes planejados, com atendimento personalizado que entende suas necessidades.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta
          name="keywords"
          content="móveis planejados, móveis sob medida, marcenaria, cozinha planejada, quarto planejado, armários planejados, móveis personalizados, projeto de móveis personalizados, móveis planejados alto padrão, móveis planejados modernos, móveis planejados SC, design de interiores, ambientes planejados, móveis planejados para apartamento, marcenaria sob medida, Akai Móveis, Akai Móveis Planejados, Akai Marcenaria, Akai Planejados, móveis planejados campeche, móveis planejados rio tavares, móveis planejados lagoa da conceição, móveis planejados sul da ilha, móveis planejados em floripa, marcenaria artesanal"
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
            })(window,document,'script','dataLayer','GTM-5D7VWGG9');`
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
        <noscript><img height="1" width="1" style={{display:"none"}}
        src="https://www.facebook.com/tr?id=1686648795328693&ev=PageView&noscript=1"
        /></noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
