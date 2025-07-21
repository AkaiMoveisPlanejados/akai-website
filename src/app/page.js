/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Home,
  Plane,
} from "lucide-react";
import LogoImage from "./assets/2.png";
import Image from "next/image";
import GoogleReviews from "./components/GoogleReviews/GoogleReviews";
import PlanejadosModulados from "./components/PlanejadosModulados/PlanejadosModulados";
import PinterestGallery from "./components/PinterestGallery/PinterestGallery";
import ContactForm from "./components/ContactForm/ContactForm";

// import HeroBackground from '@/app/assets/images/hero.jpeg'; // Assuming you have a hero background component

// Mock data for projects
const projects = [
  {
    id: 1,
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Foto+Cozinha+1",
    category: "Cozinhas",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Foto+Dormitório+2",
    category: "Dormitórios",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Foto+Banheiro+3",
    category: "Banheiros",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Foto+Escritório+4",
    category: "Escritórios",
  },
  {
    id: 5,
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Foto+Cozinha+5",
    category: "Cozinhas",
  },
  {
    id: 6,
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Foto+Dormitório+6",
    category: "Dormitórios",
  },
];

// WhatsApp Icon Component
const WhatsAppIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={size} height={size}>
    <path fill="#FFF" d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/>
  </svg>
);

// Main App Component
export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  const navLinks = ["Início", "Projetos", "Sobre", "Contato"];

  // State to track the currently open FAQ item. '0' means the first item is open by default.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    // If the clicked item is already open, close it (by setting state to null).
    // Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans text-zinc-800">
      <main className="min-h-screen">
        {/* Hero Section */}
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
                18.500
              </span>
              <span className="self-end text-sm min-[768px]:text-lg font-regular">à vista</span>
            </div>
            <div className="min-[320px]:mt-6 min-[768px]:mt-6 flex items-center justify-center space-x-1">
              <span className="text-sm self-start font-bold">ou 18x de R$</span>
              <span className="self-center text-4xl font-bold text-red-600 text-shadow-lg">
                1.099
              </span>
            </div>
            <p className="text-[12px] mt-4 text-center max-w-md text-shadow-lg max-[768px]:max-w-[300px]">
              Valores referentes somente as partes moduladas de um apartamento de 49m²
            </p>
            <div className="mt-12 text-center w-full min-[768px]:w-auto flex flex-col min-[768px]:flex-row items-center justify-center min-[768px]:space-x-4">
              <a className="bg-white text-center text-center max-[768px]:w-[90%] max-[768px]:m-auto max-[768px]:mb-4 w-full min-[768px]:w-auto text-sm text-zinc-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-md cursor-pointer" href="#contato">
                SOLICITAR ORÇAMENTO
              </a>
              <a
                className="flex justify-center align-center text-center max-[768px]:w-[90%] max-[768px]:m-auto min-[768px]:w-auto bg-red-600 text-center text-sm text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md cursor-pointer"
                href="https://wa.me/5551981150097?text=Quero%20conhecer%20os%20projetos%20do%20apartamento%20completo"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONHECER PROJETOS
                <div className="ml-2">
                  <WhatsAppIcon size="20px" />
                </div>
              </a>
            </div>
          </div>
        </section>

        <div className="bg-zinc-50 font-sans" id="sobre">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image and Overlapping Text Box */}
              <div className="relative h-[400px] md:h-[550px] lg:h-full">
                {/* Background Image */}
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                  alt="Modern bedroom interior with a well-made bed and elegant lighting"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x700/333333/ffffff?text=Ambiente+Moderno";
                  }}
                />
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col justify-center">
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
                  <a className="bg-red-600 text-sm text-center text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md cursor-pointer" href="#contato">
                    SOLICITAR ORÇAMENTO
                  </a>
                  <a className="bg-white text-sm text-center text-zinc-800 font-bold py-3 px-8 rounded-lg border-2 border-zinc-300 hover:bg-zinc-100 hover:border-zinc-400 transition-colors duration-300 cursor-pointer" href="#projetos">
                    CONHECER PROJETOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PlanejadosModulados />

        <PinterestGallery />

        <GoogleReviews />
        
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Navegação</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-zinc-400 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" /> (051) 981150097
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" /> akaimoveiseplanejados@gmail.com
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" /> Sapucaia do Sul, RS
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/akai.moveis/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/akai.moveis" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-700 pt-6 text-center text-zinc-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Akai Móveis Planejados. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5551981150097"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-110 z-50"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon size="40px" className="h-8 w-8" />
      </a>
    </div>
  );
}
