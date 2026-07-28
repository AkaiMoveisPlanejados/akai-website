import React, { useEffect, useState } from 'react';
import { Instagram, Star } from 'lucide-react';
import Image from 'next/image';

// Valores conferidos no Google Business Profile em 27/07/2026. Ficam no HTML
// desde o primeiro carregamento (bom para indexação) e são substituídos pelos
// números reais assim que /api/reviews responde.
const AVALIACOES_PADRAO = { rating: 4.8, total: 126 };

export default function Sobre() {
  const [avaliacoes, setAvaliacoes] = useState(AVALIACOES_PADRAO);

  useEffect(() => {
    let ativo = true;
    fetch('/api/reviews')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!ativo || !d) return;
        if (typeof d.rating === 'number' && typeof d.total === 'number') {
          setAvaliacoes({ rating: d.rating, total: d.total });
        }
      })
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, []);

  const nota = avaliacoes.rating.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="bg-zinc-50 font-sans" id="sobre">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image and Overlapping Text Box */}
          <div className="relative h-[400px] md:h-[580px] lg:h-full">
            {/* Background Image */}
            <Image
              src="/projetos/akai-cozinha-nichos-iluminados.jpg"
              alt="Cozinha planejada com nichos iluminados e cristaleiras — Akai Móveis, Sapucaia do Sul"
              width={1600}
              height={1066}
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute top-0 left-0 h-full w-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center max-[768px]:mt-8">
            <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Quem Somos
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 mb-6">
              Especialistas em cozinhas planejadas e moduladas desde 2009
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-3">
              A Akai é especializada em cozinhas — planejadas e moduladas — em
              Sapucaia do Sul. Atendemos também Esteio, Canoas, São Leopoldo,
              Novo Hamburgo e Porto Alegre.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-3">
              O projeto e o orçamento são gratuitos, e a montagem é feita pela
              nossa própria equipe, não por terceiros. Parcelamos em até 18x sem
              juros no cartão, com 8% de desconto à vista.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-3">
              Além das cozinhas, também fazemos dormitórios, banheiros,
              lavanderias e home office, e trabalhamos com móveis em série como
              estofados, colchões e salas de jantar.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Somos uma loja de bairro, de atendimento próximo, em rua tranquila
              e com estacionamento fácil.
            </p>

            {/* Prova social — atualiza sozinha conforme o Google */}
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJhx31gjRvGZURNECVHA6IrZw"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50"
            >
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" aria-hidden="true" />
              <span className="font-bold text-zinc-800">{nota}</span>
              <span className="text-sm text-zinc-600">
                de {avaliacoes.total} avaliações no Google
              </span>
            </a>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                className="bg-red-600 flex items-center align-middle justify-center text-sm text-center text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md cursor-pointer"
                href="https://www.instagram.com/akai.moveis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACESSE NOSSO INSTAGRAM <Instagram size={16} className="inline-block ml-2" />
              </a>
              <a className="bg-white text-sm text-center text-zinc-800 font-bold py-3 px-8 rounded-lg border-2 border-zinc-300 hover:bg-zinc-100 hover:border-zinc-400 transition-colors duration-300 cursor-pointer" href="#projetos">
                CONHECER PROJETOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
