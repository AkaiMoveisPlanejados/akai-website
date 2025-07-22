import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import QuemSomosImage from '../../assets/quemsomos.jpg';

export default function Sobre() {
    return (
        <div className="bg-zinc-50 font-sans" id="sobre">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image and Overlapping Text Box */}
              <div className="relative h-[400px] md:h-[580px] lg:h-full">
                {/* Background Image */}
                <Image
                  src={QuemSomosImage}
                  alt="Projeto de Móveis Planejados"
                  width={600}
                  height={800}
                  quality={100}
                  className="absolute top-0 left-0 object-cover min-[768px]:w-full min-[768px]:h-full rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x700/333333/ffffff?text=Ambiente+Moderno";
                  }}
                />
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col justify-center max-[768px]:mt-8">
                <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Quem Somos
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-zinc-800 mb-6">
                  Especialistas em móveis há mais de 15 anos 
                </h1>
                <p className="text-zinc-600 leading-relaxed mb-2">
                  Desde 2009 em Sapucaia do Sul, somos especialistas em móveis planejados e modulados, oferecendo soluções completas para transformar sua casa com estilo e funcionalidade. Trabalhamos também com móveis em série, como colchões, estofados, salas de jantar, banheiros, homes e muito mais.
                </p>
                <p className="text-zinc-600 mb-2">
                  Oferecemos projetos gratuitos para ambientes planejados, com atendimento personalizado que entende suas necessidades.
Facilitamos sua compra com parcelamento em até 18 vezes sem juros no cartão.
                </p>
                <p className="text-zinc-600 mb-6">
                  Somos uma loja de bairro com clima acolhedor, localizada em uma área tranquila e de fácil acesso, com várias vagas de estacionamento na rua — ideal para quem busca qualidade, praticidade e bom atendimento.
                </p>

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