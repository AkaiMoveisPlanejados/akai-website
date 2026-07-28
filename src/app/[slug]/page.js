// Páginas dedicadas por ambiente e tipo de móvel — /cozinhas-planejadas,
// /cozinhas-moduladas, /dormitorios-modulados e as demais definidas em
// data/linhas.js.
//
// São páginas de servidor, sem JavaScript de interface: o conteúdo inteiro vai
// no HTML, que é o que interessa para busca e para os crawlers de IA. Só o
// botão de WhatsApp é client, por causa do evento de GTM.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import LogoImage from "@/app/assets/2.png";
import Footer from "@/app/components/Footer/Footer";
import BotoesFlutuantes from "@/app/components/BotoesFlutuantes/BotoesFlutuantes";
import CtaWhats from "@/app/components/Linha/CtaWhats";
import { linhas, porSlug, ATUALIZADO_EM } from "@/app/data/linhas";
import { projetos } from "@/app/data/projetos";
import { schemaLinha, SITE_URL } from "@/app/data/schema";

// slugs conhecidos viram HTML estático no build; qualquer outro dá 404
export const dynamicParams = false;

export function generateStaticParams() {
  return linhas.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const linha = porSlug(slug);
  if (!linha) return {};

  return {
    title: linha.title,
    description: linha.description,
    alternates: { canonical: `/${linha.slug}` },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `${SITE_URL}/${linha.slug}`,
      siteName: "Akai Móveis e Ambientes Planejados",
      title: linha.title,
      description: linha.description,
      images: [
        {
          url: fotosDa(linha)[0]?.imagens[0].src || "/images/hero.jpeg",
          alt: linha.h1,
        },
      ],
    },
  };
}

const fotosDa = (linha) =>
  projetos.filter(
    (p) => p.categoria === linha.categoria && p.tipo === linha.tipo
  );

// Fotos cedidas por fornecedores não podem afirmar execução pela Akai.
const legenda = (p) =>
  p.fabricante
    ? `${p.titulo} — Akai Móveis`
    : `${p.titulo} — projeto executado pela Akai Móveis`;

function Foto({ projeto, imagem, prioridade }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-100">
      <Image
        src={imagem.src}
        alt={`${legenda(projeto)}${imagem.legenda ? ` — ${imagem.legenda}` : ""}`}
        width={imagem.largura || 1080}
        height={imagem.altura || 1350}
        sizes="(max-width: 768px) 92vw, 480px"
        priority={prioridade}
        className="h-full w-full object-cover"
      />
      {imagem.legenda && (
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white">
          {imagem.legenda}
        </span>
      )}
    </div>
  );
}

export default async function PaginaDaLinha({ params }) {
  const { slug } = await params;
  const linha = porSlug(slug);
  if (!linha) notFound();

  const fotos = fotosDa(linha);
  const irma = porSlug(linha.irma.slug);
  const mensagem = `Olá! Vi a página de ${linha.nome.toLowerCase()} no site e quero um projeto gratuito.`;
  const dataPorExtenso = new Date(`${ATUALIZADO_EM}T12:00:00`).toLocaleDateString(
    "pt-BR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <div className="bg-white font-sans text-zinc-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaLinha(linha, fotos)),
        }}
      />

      {/* topo */}
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

      <main>
        {/* cabeçalho da página */}
        <section className="border-b border-zinc-100 bg-zinc-50">
          <div className="container mx-auto max-w-4xl px-6 py-12 md:py-16">
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
                <li className="font-semibold text-zinc-700">{linha.nome}</li>
              </ol>
            </nav>

            <h1 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl">
              {linha.h1}
            </h1>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600">
              {linha.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <CtaWhats mensagem={mensagem} origem={linha.nome} />
              <p className="mt-3 text-sm text-zinc-500">
                Orçamento inicial gratuito, a partir das medidas que você enviar.
              </p>
            </div>

            {/* data à vista: quem lê — pessoa ou IA — quer saber se o texto
                ainda vale */}
            <p className="mt-8 text-sm text-zinc-400">
              Conteúdo revisado em{" "}
              <time dateTime={ATUALIZADO_EM}>{dataPorExtenso}</time> pela equipe
              da Akai Móveis, em Sapucaia do Sul.
            </p>
          </div>
        </section>

        {/* fotos */}
        {fotos.length > 0 && (
          <section className="container mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-8 text-2xl font-extrabold text-zinc-900 md:text-3xl">
              Projetos de {linha.nome.toLowerCase()}
            </h2>

            <div className="space-y-12">
              {fotos.map((p, i) => (
                <article key={p.id}>
                  <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <Foto
                      projeto={p}
                      imagem={p.imagens[0]}
                      prioridade={i === 0}
                    />
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-zinc-900">
                        {p.titulo}
                      </h3>
                      <p className="leading-relaxed text-zinc-600">
                        {p.descricao}
                      </p>
                    </div>
                  </div>

                  {/* projetos com mais de uma foto do mesmo ambiente */}
                  {p.imagens.length > 1 && (
                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                      {p.imagens.slice(1).map((img) => (
                        <Foto key={img.src} projeto={p} imagem={img} />
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* texto próprio da página */}
        <section className="bg-zinc-50 py-14">
          <div className="container mx-auto max-w-3xl space-y-10 px-6">
            {linha.secoes.map((s) => (
              <div key={s.titulo}>
                <h2 className="mb-4 text-2xl font-extrabold text-zinc-900">
                  {s.titulo}
                </h2>
                <div className="space-y-4 leading-relaxed text-zinc-600">
                  {s.texto.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
              <h2 className="mb-5 text-xl font-bold text-zinc-900">
                {linha.checklist.titulo}
              </h2>
              <ul className="space-y-3">
                {linha.checklist.itens.map((item) => (
                  <li key={item} className="flex gap-3 text-zinc-600">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* página irmã */}
        {irma && (
          <section className="container mx-auto max-w-3xl px-6 py-14">
            <div className="rounded-2xl bg-zinc-900 p-8 text-center md:p-10">
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Ainda em dúvida entre planejado e modulado?
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-zinc-300">
                {linha.irma.texto}
              </p>
              <Link
                href={`/${irma.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors duration-300 hover:bg-zinc-200"
              >
                {linha.irma.rotulo}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        {/* perguntas específicas desta página */}
        <section className="bg-zinc-50 py-14">
          <div className="container mx-auto max-w-3xl px-6">
            <h2 className="mb-8 text-2xl font-extrabold text-zinc-900 md:text-3xl">
              Perguntas sobre {linha.nome.toLowerCase()}
            </h2>
            <div className="space-y-4">
              {linha.faq.map((item) => (
                <details
                  key={item.pergunta}
                  className="group rounded-xl border border-zinc-200 bg-white p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-zinc-900">
                    {item.pergunta}
                    <ChevronRight
                      className="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="mt-4 space-y-3 leading-relaxed text-zinc-600">
                    {item.resposta.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <p className="mt-8 text-center text-zinc-600">
              Outras dúvidas estão respondidas nas{" "}
              <Link
                href="/#faq"
                className="font-semibold text-red-600 underline-offset-4 hover:underline"
              >
                perguntas frequentes
              </Link>
              .
            </p>
          </div>
        </section>

        {/* fechamento */}
        <section className="bg-neutral-900 py-16">
          <div className="container mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              Vamos desenhar o seu projeto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-300">
              Envie as medidas do ambiente pelo WhatsApp e a gente monta a
              proposta sem custo. A loja fica na R. Otaviano Silveira, 545, no
              Centro de Sapucaia do Sul, e atendemos toda a região metropolitana
              de Porto Alegre.
            </p>
            <div className="mt-8">
              <CtaWhats
                mensagem={mensagem}
                origem={`${linha.nome} | Rodapé`}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BotoesFlutuantes />
    </div>
  );
}
