"use client";

import { GTMEvent } from "@/app/utils/GTMEvent";
import { WhatsAppIcon } from "@/app/utils/WhatsAppIcon";

// Botão de WhatsApp das páginas de ambiente. É client apenas por causa do
// evento de GTM; o texto da mensagem muda conforme a página, para que a
// vendedora já saiba de onde veio o contato.
export default function CtaWhats({ mensagem, origem, variante = "principal" }) {
  const estilo =
    variante === "principal"
      ? "inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-md transition-colors duration-300 hover:bg-red-700"
      : "inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10";

  return (
    <a
      href={`https://wa.me/5551981150097?text=${encodeURIComponent(mensagem)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => GTMEvent("click", { action: `${origem} | WhatsApp` })}
      className={estilo}
    >
      <WhatsAppIcon size={20} />
      QUERO MEU PROJETO GRATUITO
    </a>
  );
}
