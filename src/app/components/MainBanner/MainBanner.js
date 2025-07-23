import { WhatsAppIcon } from "@/app/utils/WhatsAppIcon";
import Image from "next/image";
import React from "react";
import LogoImage from "../../assets/2.png";

export default function MainBanner() {
    return (
        <section
          className="relative h-screen bg-cover bg-top"
          style={{
            backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 99%, rgba(237, 221, 83, 0) 100%),
    url('/images/hero.jpeg')`,
          }}
          id="início"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto z-50">
            <Image
              src={LogoImage}
              alt="Akai Móveis Logo"
              style={{ objectFit: "contain", marginTop: "5px", textAlign: "center" }}
              priority
              width={180}
              height={10}
            />
          </div>
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
            <h1 className="min-[320px]:text-[26px] min-[768px]:text-[58px] font-bold text-shadow-lg text-center">
              APARTAMENTO COMPLETO
            </h1>
            <p className="min-[320px]:text-[10px] min-[768px]:text-lg max-[768px]:max-w-[300px] text-center text-shadow-lg">
              Cozinha (lavanderia acoplada) + Quarto Casal + Quarto Solteiro + Lavanderia + Home +
              Banheiro
            </p>
            <h2 className="mt-2 min-[320px]:text-[18px] min-[768px]:text-[38px] font-bold text-shadow-lg">
              MÓVEIS MODULADOS E PLANEJADOS
            </h2>
            <div className="min-[320px]:mt-2 min-[768px]:mt-4 flex items-center justify-center space-x-1">
              <span className="self-start text-sm min-[768px]:text-lg font-regular text-shadow-lg">
                A partir de R$
              </span>
              <span className="text-4xl min-[768px]:text-5xl self-center font-bold text-red-600 text-shadow-lg">
                {" "}
                18.400
              </span>
              <span className="self-end text-sm min-[768px]:text-lg font-regular">à vista</span>
            </div>
            <div className="min-[320px]:mt-6 min-[768px]:mt-6 flex items-center justify-center space-x-1">
              <span className="text-sm self-start font-bold">ou 18x de R$</span>
              <span className="self-center text-4xl font-bold text-red-600 text-shadow-lg">
                1.111
              </span>
            </div>
            <p className="text-[12px] mt-4 text-center max-w-md text-shadow-lg max-[768px]:max-w-[300px]">
              Valores referentes somente as partes moduladas de um apartamento de 49m²
            </p>
            <div className="mt-12 text-center w-full min-[768px]:w-auto flex flex-col min-[768px]:flex-row items-center justify-center min-[768px]:space-x-4">
              <a
                className="bg-white text-center text-center max-[768px]:w-[90%] max-[768px]:m-auto max-[768px]:mb-4 w-full min-[768px]:w-auto text-sm text-zinc-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-md cursor-pointer"
                href="#contato"
                onClick={() => {GTMEvent('click', { action: 'Solicitar Orçamento | Primeiro Banner' })}}
              >
                SOLICITAR ORÇAMENTO
              </a>
              <a
                className="flex justify-center align-center text-center max-[768px]:w-[90%] max-[768px]:m-auto min-[768px]:w-auto bg-red-600 text-center text-sm text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md cursor-pointer"
                href="https://wa.me/5551981150097?text=Quero%20conhecer%20os%20projetos%20do%20apartamento%20completo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {GTMEvent('click', { action: 'Conhecer Projetos | WhatsApp' })}}
              >
                CONHECER PROJETOS
                <div className="ml-2">
                  <WhatsAppIcon size="20px" />
                </div>
              </a>
            </div>
          </div>
        </section>
    )
};
