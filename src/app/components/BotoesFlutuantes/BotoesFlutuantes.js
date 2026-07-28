'use client';

// Botões que acompanham a rolagem, no canto inferior direito.
//
// No celular eles ficam menores (44px, o mínimo confortável para o dedo) e mais
// próximos do canto: a tela é pequena e o que está embaixo do botão costuma ser
// justamente a foto ou o texto que a pessoa foi ver. No desktop sobra espaço,
// então voltam ao tamanho cheio.
//
// O clique no Instagram já é medido pela tag instagram_click do contêiner, que
// dispara em qualquer link para www.instagram.com.

import { Instagram } from 'lucide-react';
import React from 'react';
import { WhatsAppIcon } from '@/app/utils/WhatsAppIcon';
import { GTMEvent } from '@/app/utils/GTMEvent';

const whatsappNumber = '5551981150097';

const base =
  'flex items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 h-11 w-11 md:h-16 md:w-16';

function BotoesFlutuantes() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2 md:bottom-5 md:right-5 md:gap-3">
      <a
        href="https://www.instagram.com/akai.moveis/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver os projetos da Akai no Instagram"
        title="Nossos projetos no Instagram"
        onClick={() =>
          GTMEvent('click', { action: 'Botao flutuante | Instagram' })
        }
        className={`${base} bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600`}
      >
        <Instagram className="h-5 w-5 md:h-8 md:w-8" aria-hidden="true" />
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        title="Fale conosco no WhatsApp"
        onClick={() =>
          GTMEvent('click', {
            action: 'Botao flutuante | WhatsApp',
            whatsapp_origem: 'Botao flutuante',
          })
        }
        className={`${base} bg-green-500 hover:bg-green-600`}
      >
        <span className="block h-6 w-6 md:h-10 md:w-10">
          <WhatsAppIcon size="100%" />
        </span>
      </a>
    </div>
  );
}

export default BotoesFlutuantes;
