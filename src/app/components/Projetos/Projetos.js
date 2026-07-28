"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categorias, projetos } from "@/app/data/projetos";
import { GTMEvent } from "@/app/utils/GTMEvent";

// O lucide-react removeu os ícones de marca, então o do Pinterest vai inline.
const IconePinterest = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

// Fotos cedidas por fornecedores não podem afirmar execução pela Akai.
const legenda = (p) =>
  p.fabricante
    ? `${p.titulo} — Akai Móveis`
    : `${p.titulo} — projeto executado pela Akai Móveis`;

// Visor do projeto selecionado. Quando o projeto tem mais de uma foto do mesmo
// ambiente, vira um carrossel próprio — é o caso dos antes e depois.
function Visor({ projeto, ativo }) {
  const [i, setI] = useState(0);
  const fotos = projeto.imagens;
  const varias = fotos.length > 1;
  const atual = fotos[i] || fotos[0];

  const ir = (passo) => {
    setI((n) => (n + passo + fotos.length) % fotos.length);
    GTMEvent("click", { action: `Projetos | Foto de ${projeto.titulo}` });
  };

  const botao =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg transition-colors duration-300 hover:bg-white";

  return (
    <div
      className={
        ativo ? "relative w-full shrink-0 rounded-xl sm:w-auto" : "hidden"
      }
    >
      <Image
        src={atual.src}
        alt={`${legenda(projeto)}${atual.legenda ? ` — ${atual.legenda}` : ""}`}
        width={atual.largura || 1080}
        height={atual.altura || 1350}
        sizes="(max-width: 768px) 90vw, 520px"
        className="h-auto w-full rounded-xl object-contain sm:h-[425px] sm:w-auto"
      />

      {atual.legenda && (
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white">
          {atual.legenda}
        </span>
      )}

      {varias && (
        <>
          <button
            type="button"
            onClick={() => ir(-1)}
            aria-label="Foto anterior deste projeto"
            className={`${botao} left-2`}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => ir(1)}
            aria-label="Próxima foto deste projeto"
            className={`${botao} right-2`}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {fotos.map((_, n) => (
              <span
                key={n}
                aria-hidden="true"
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  n === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Lista horizontal de miniaturas, sem barra de rolagem visível. A navegação é
// por setas — que só aparecem quando há para onde ir — e pelo arrasto no celular.
function Carrossel({ projetos: lista, atualId, aoEscolher, visivel }) {
  const ref = useRef(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(false);

  const conferir = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const folga = 8; // tolerância para arredondamento do navegador
    setPodeVoltar(el.scrollLeft > folga);
    setPodeAvancar(el.scrollLeft + el.clientWidth < el.scrollWidth - folga);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    conferir();
    el.addEventListener("scroll", conferir, { passive: true });
    window.addEventListener("resize", conferir);
    // o painel só ganha largura quando fica visível; sem isto, as setas de uma
    // aba recém-aberta seriam calculadas com largura zero
    const observador =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(conferir) : null;
    observador?.observe(el);
    return () => {
      el.removeEventListener("scroll", conferir);
      window.removeEventListener("resize", conferir);
      observador?.disconnect();
    };
  }, [conferir]);

  useEffect(() => {
    if (visivel) conferir();
  }, [visivel, conferir]);

  const rolar = (direcao) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: direcao * Math.round(el.clientWidth * 0.8),
      behavior: "smooth",
    });
    // não dependemos só do evento de scroll para atualizar as setas
    setTimeout(conferir, 500);
    GTMEvent("click", {
      action: `Projetos | Seta ${direcao > 0 ? "direita" : "esquerda"}`,
    });
  };

  const seta =
    "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-700 shadow-lg transition-colors duration-300 hover:bg-zinc-100 sm:flex";

  return (
    <div className="relative">
      {podeVoltar && (
        <button
          type="button"
          onClick={() => rolar(-1)}
          aria-label="Ver projetos anteriores"
          className={`${seta} -left-3`}
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      <ul
        ref={ref}
        className="sem-barra-rolagem flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 sm:gap-4"
      >
        {lista.map((p) => {
          const ativo = p.id === atualId;
          return (
            <li key={p.id} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => {
                  aoEscolher(p.id);
                  GTMEvent("click", { action: `Projetos | ${p.titulo}` });
                }}
                aria-pressed={ativo}
                title={p.titulo}
                className={`relative block overflow-hidden rounded-xl transition-all duration-300 ${
                  ativo ? "opacity-100 shadow-lg" : "opacity-45 hover:opacity-80"
                }`}
              >
                <Image
                  src={p.imagens[0].src}
                  alt={legenda(p)}
                  width={p.imagens[0].largura || 1080}
                  height={p.imagens[0].altura || 1350}
                  sizes="(max-width: 640px) 45vw, 200px"
                  className="h-[190px] w-[152px] object-cover sm:h-[240px] sm:w-[192px]"
                />
                {p.imagens.length > 1 && (
                  <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-bold text-white">
                    {p.imagens.length}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {podeAvancar && (
        <button
          type="button"
          onClick={() => rolar(1)}
          aria-label="Ver mais projetos"
          className={`${seta} -right-3`}
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default function Projetos() {
  const [categoria, setCategoria] = useState(categorias[0].id);
  // guarda o projeto escolhido por categoria, para não perder a seleção ao trocar de aba
  const [selecionado, setSelecionado] = useState(() =>
    Object.fromEntries(
      categorias.map((c) => [
        c.id,
        projetos.find((p) =>
          c.porTipo ? p.tipo === c.porTipo : p.categoria === c.id && p.tipo !== 'modulada'
        )?.id,
      ])
    )
  );

  const escolher = (catId, projId) =>
    setSelecionado((s) => ({ ...s, [catId]: projId }));

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="projetos">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-4">
            Projetos
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 leading-relaxed">
            Ambientes planejados e modulados. Escolha um tipo e toque nas fotos
            para ampliar.
          </p>
        </div>

        {/* Filtros */}
        <div
          className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Ambientes"
        >
          {categorias.map((c) => {
            const ativo = c.id === categoria;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={ativo}
                aria-controls={`painel-${c.id}`}
                onClick={() => {
                  setCategoria(c.id);
                  GTMEvent("click", { action: `Projetos | Filtro ${c.nome}` });
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300 sm:px-7 ${
                  ativo
                    ? "bg-red-600 text-white shadow-md"
                    : "border-2 border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                {c.nome}
              </button>
            );
          })}
        </div>

        {/* Um painel por categoria. Todos ficam no HTML — só a exibição muda,
            para que os 17 projetos sejam indexáveis. */}
        {categorias.map((c) => {
          const daCategoria = c.porTipo
            ? projetos.filter((p) => p.tipo === c.porTipo)
            : projetos.filter(
                (p) => p.categoria === c.id && p.tipo !== 'modulada'
              );
          const atual =
            daCategoria.find((p) => p.id === selecionado[c.id]) || daCategoria[0];

          return (
            <div
              key={c.id}
              id={`painel-${c.id}`}
              role="tabpanel"
              aria-label={c.nome}
              className={c.id === categoria ? "block" : "hidden"}
            >
              <Carrossel
                projetos={daCategoria}
                atualId={atual?.id}
                aoEscolher={(id) => escolher(c.id, id)}
                visivel={c.id === categoria}
              />

              <div className="mt-6 flex flex-col items-center gap-8 rounded-2xl bg-zinc-50 p-6 md:flex-row md:items-center md:p-8">
                {/* imagem grande do projeto selecionado. Dimensões explícitas
                    na proporção 4:5 das fotos, para não cortar nada.
                    Todas ficam no HTML; apenas a ativa é exibida. */}
                {daCategoria.map((p) => (
                  <Visor
                    key={p.id}
                    projeto={p}
                    ativo={Boolean(atual && p.id === atual.id)}
                  />
                ))}

                {/* descrição da linha — não muda ao trocar de foto */}
                <div className="flex flex-col justify-center">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900 md:text-2xl">
                    {c.tituloLinha}
                  </h3>
                  <p className="leading-relaxed text-zinc-600">{c.descricao}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="https://wa.me/5551981150097?text=Quero%20um%20projeto%20gratuito%20para%20minha%20casa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => GTMEvent("click", { action: "Projetos | WhatsApp" })}
            className="rounded-lg bg-red-600 px-8 py-3 text-sm font-bold text-white shadow-md transition-colors duration-300 hover:bg-red-700"
          >
            QUERO MEU PROJETO GRATUITO
          </a>
          <a
            href="https://br.pinterest.com/akaimoveiseplanejados/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => GTMEvent("click", { action: "Projetos | Pinterest" })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors duration-300 hover:text-zinc-800"
          >
            <IconePinterest size={16} />
            Ver mais projetos no nosso Pinterest
          </a>
        </div>
      </div>
    </div>
  );
}
