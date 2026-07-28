"use client";

import { ChevronDown } from "lucide-react";
import { faq } from "@/app/data/faq";
import { GTMEvent } from "@/app/utils/GTMEvent";

export default function FAQ() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="duvidas">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-4">
            Perguntas frequentes
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 leading-relaxed">
            As dúvidas que mais recebemos de quem está planejando a cozinha.
            Não achou a sua? Fale com a gente pelo WhatsApp.
          </p>
        </div>

        <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {faq.map((item, i) => (
            <details
              key={i}
              className="group py-5"
              onToggle={(e) => {
                // só no abrir; fechar não diz nada
                if (e.currentTarget.open)
                  GTMEvent("abrir_faq", { pergunta: item.pergunta });
              }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                <h3 className="text-base md:text-lg font-semibold text-zinc-900">
                  {item.pergunta}
                </h3>
                <ChevronDown
                  className="faq-chevron mt-1 h-5 w-5 flex-shrink-0 text-red-600"
                  aria-hidden="true"
                />
              </summary>
              <div className="mt-3 space-y-3 pr-9 text-zinc-600 leading-relaxed">
                {item.resposta.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/5551981150097?text=Tenho%20uma%20d%C3%BAvida%20sobre%20m%C3%B3veis%20planejados"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              GTMEvent("click", {
                action: "FAQ | WhatsApp",
                whatsapp_origem: "Perguntas frequentes",
              })
            }
            className="inline-block rounded-lg bg-red-600 px-8 py-3 text-sm font-bold text-white shadow-md transition-colors duration-300 hover:bg-red-700"
          >
            TIRAR MINHA DÚVIDA NO WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}
