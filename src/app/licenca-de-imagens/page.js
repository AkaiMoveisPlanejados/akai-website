// Página de licença das fotos do portfólio.
//
// Existe porque os campos `license` e `acquireLicensePage` do schema precisam
// apontar para um endereço real — o Google usa esta página no selo de
// licenciamento do Google Imagens. Apontar para uma URL que não existe é pior
// do que não declarar o campo.

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import LogoImage from "@/app/assets/2.png";
import Footer from "@/app/components/Footer/Footer";
import BotoesFlutuantes from "@/app/components/BotoesFlutuantes/BotoesFlutuantes";

const SITE_URL = "https://www.akaimoveis.com.br";
const TITLE = "Licença de uso das imagens | Akai Móveis";
const DESCRIPTION =
  "Condições de uso das fotos publicadas no site da Akai Móveis e Ambientes Planejados, de Sapucaia do Sul.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/licenca-de-imagens" },
  robots: { index: true, follow: true },
};

export default function LicencaDeImagens() {
  const secoes = [
    {
      titulo: "Fotos de projetos executados pela Akai",
      texto: [
        "A maior parte das fotos publicadas neste site registra ambientes projetados, vendidos e montados pela Akai Móveis e Ambientes Planejados. Essas imagens são de nossa autoria e estão protegidas por direito autoral.",
        "Elas podem ser reproduzidas mediante autorização prévia e por escrito, desde que citada a autoria. Não é permitido usá-las para anunciar produtos ou serviços de terceiros, nem apresentá-las como trabalho de outra empresa.",
      ],
    },
    {
      titulo: "Fotos cedidas por fornecedores",
      texto: [
        "Parte das fotos do portfólio foi cedida pelos nossos fornecedores parceiros, que mantêm os direitos sobre elas. Nesses casos a Akai tem autorização de uso, mas não pode licenciar as imagens para terceiros.",
        "Se você precisa usar uma foto e não sabe em qual dos dois casos ela se enquadra, pergunte pelo WhatsApp que a gente confere.",
      ],
    },
    {
      titulo: "Como pedir autorização",
      texto: [
        "Fale com a gente pelo WhatsApp (51) 98115-0097 ou pelo e-mail akaimoveiseplanejados@gmail.com, indicando qual imagem você quer usar e onde ela será publicada.",
        "Respondemos em horário comercial, de segunda a sexta das 9h às 12h e das 14h às 19h, e aos sábados das 9h às 12h e das 14h às 17h.",
      ],
    },
  ];

  return (
    <div className="bg-white font-sans text-zinc-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE_URL}/licenca-de-imagens#webpage`,
            url: `${SITE_URL}/licenca-de-imagens`,
            name: TITLE,
            description: DESCRIPTION,
            inLanguage: "pt-BR",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
          }),
        }}
      />

      <header className="bg-neutral-900">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Ir para a página inicial da Akai Móveis">
            <Image
              src={LogoImage}
              alt="Akai Móveis"
              width={140}
              height={40}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>
          <Link
            href="/#projetos"
            className="text-sm font-semibold text-zinc-300 transition-colors duration-300 hover:text-white"
          >
            Ver todos os projetos
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-6 py-12 md:py-16">
        <nav aria-label="Trilha de navegação" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-zinc-500">
            <li>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-zinc-800"
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-semibold text-zinc-700">Licença de imagens</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl">
          Licença de uso das imagens
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          As fotos deste site mostram ambientes reais. Esta página explica de
          quem são e o que é preciso para reproduzi-las.
        </p>

        <div className="mt-10 space-y-10">
          {secoes.map((s) => (
            <section key={s.titulo}>
              <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
                {s.titulo}
              </h2>
              <div className="space-y-4 leading-relaxed text-zinc-600">
                {s.texto.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-zinc-50 p-6 md:p-8">
          <p className="leading-relaxed text-zinc-600">
            <strong className="font-bold text-zinc-900">
              Akai Móveis e Ambientes Planejados
            </strong>
            <br />
            AKAI MOVEIS E UTENSILIOS LTDA — CNPJ 11.329.773/0001-32
            <br />
            R. Otaviano Silveira, 545 — Centro, Sapucaia do Sul — RS, 93214-500
            <br />
            WhatsApp{" "}
            <a
              href="https://wa.me/5551981150097"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-600 underline-offset-4 hover:underline"
            >
              (51) 98115-0097
            </a>{" "}
            · akaimoveiseplanejados@gmail.com
          </p>
        </div>
      </main>

      <Footer />
      <BotoesFlutuantes />
    </div>
  );
}
