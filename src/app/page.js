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

const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// Icon components for a cleaner look
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const features = [
  "Projeto 100% vendido para cada cliente",
  "Atendimento consultivo e personalizado",
  "Parcelamento em até 48x via Sicredi",
  "Garantia de 5 anos nos planejados",
  "Entrega rápida: em até 30 dias",
  "Acompanhamento técnico durante a execução",
  "Materiais certificados e acabamento premium",
  "Equipe especializada do início ao fim",
];

const colors = {
  primary: "#1a1a1a", // A dark zinc, almost black
  secondary: "#f0f0f0", // A light zinc for the button
  text: {
    primary: "#333333",
    secondary: "#ffffff",
    subtle: "#9ca3af",
  },
};

// Data for the FAQ section
const faqData = [
  {
    question:
      "Qual é o prazo de entrega dos projetos da Akai Móveis Ambientes Planejados?",
    answer:
      "Todos os nossos projetos são entregues em até 30 dias após a aprovação final do cliente. Trabalhamos com prazos curtos sem abrir mão da qualidade e do acabamento.",
  },
  {
    question: "Posso parcelar o valor do projeto?",
    answer:
      "Sim! Oferecemos opções flexíveis de parcelamento para se adequar ao seu orçamento. Entre em contato com nossa equipe para saber mais sobre os planos disponíveis.",
  },
  {
    question:
      "A Akai Móveis Ambientes Planejados atende projetos comerciais e corporativos?",
    answer:
      "Com certeza. Além de projetos residenciais, temos vasta experiência na criação de ambientes comerciais e corporativos, como escritórios, lojas e consultórios, sempre com foco em funcionalidade e design.",
  },
  {
    question:
      "Qual o diferencial da Akai Móveis Ambientes Planejados em relação a outras empresas?",
    answer:
      "Nosso diferencial está na combinação de design exclusivo, materiais de alta qualidade e um atendimento ao cliente personalizado. Cada projeto é único e desenvolvido para refletir a personalidade e as necessidades de cada cliente.",
  },
  {
    question: "Os móveis têm garantia?",
    answer:
      "Sim, todos os nossos móveis planejados possuem garantia completa contra defeitos de fabricação. A sua tranquilidade e satisfação são nossa prioridade.",
  },
];

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
            <p className="min-[320px]:text-[10px] min-[768px]:text-lg text-shadow-lg">
              Cozinha + Quarto Casal + Quarto Solteiro + Lavanderia + Home +
              Banheiro
            </p>
            <h2 className="mt-2 min-[320px]:text-[18px] min-[768px]:text-[38px] font-bold text-shadow-lg">
              MÓVEIS MODULADOS E PLANEJADOS
            </h2>
            <div className="min-[320px]:mt-2 min-[768px]:mt-4 flex items-center justify-center space-x-1">
              <span className="self-start text-sm min-[768px]:text-lg font-regular text-shadow-lg">
                A partir de R$
              </span>
              <span className="text-4xl min-[768px]:text-5xl self-center font-bold text-red-400 text-shadow-lg">
                {" "}
                18.500
              </span>
              <span className="self-end text-sm min-[768px]:text-lg font-regular">à vista</span>
            </div>
            <div className="min-[320px]:mt-6 min-[768px]:mt-6 flex items-center justify-center space-x-1">
              <span className="text-sm self-start font-bold">ou 18x de R$</span>
              <span className="self-center text-4xl font-bold text-red-400 text-shadow-lg">
                1.099
              </span>
            </div>
            <p className="text-[12px] text-center max-w-md text-shadow-lg">
              Valores referentes somente a parte modulada e planejada
            </p>
            <div className="mt-12 center">
              <a className="bg-white text-zinc-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-md cursor-pointer" href="#contato">
                SOLICITAR ORÇAMENTO
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
                {/* Overlapping Text Box */}
                <div className="absolute min-[320px]:top-1/18 min-[768px]:top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-zinc-800 bg-opacity-90 text-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                  <h2 className="min-[320px]:text-[16px] min-[768px]:text-[18px] font-bold mb-3">
                    Especialistas em transformar espaços com criatividade e
                    precisão
                  </h2>
                  <p className="min-[320px]:text-[12px] min-[768px]:text-[12px] text-zinc-300 leading-relaxed">
                    Cada ambiente é pensado para refletir a essência de quem
                    vive ou trabalha nele. Unimos visão artística, técnica e
                    funcionalidade em cada projeto.
                  </p>
                </div>
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

                {/* Feature Box */}
                <div className="flex items-start bg-zinc-50 p-6 rounded-lg mb-8">
                  <div className="bg-zinc-800 p-3 rounded-full mr-5 mt-1">
                    <Home className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-800 mb-1">
                      Projetos exclusivos para pessoas e empresas únicas
                    </h3>
                    <p className="text-zinc-600 text-sm">
                      Atendimento consultivo, execução estratégica e atenção aos
                      mínimos detalhes é assim que a Akai Móveis entrega experiências.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a className="bg-zinc-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-zinc-700 transition-colors duration-300 shadow-md cursor-pointer" href="#contato">
                    SOLICITAR ORÇAMENTO
                  </a>
                  <a className="bg-white text-zinc-800 font-bold py-3 px-8 rounded-lg border-2 border-zinc-300 hover:bg-zinc-100 hover:border-zinc-400 transition-colors duration-300 cursor-pointer" href="#projetos">
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
              <h3 className="text-xl font-bold mb-4">Akai Móveis</h3>
              <p className="text-zinc-400">
                Transformando seus sonhos em realidade, com móveis planejados de
                alta qualidade.
              </p>
            </div>
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
                  <Mail size={16} className="mr-2" /> akaimoveiseplanejados@gmail.com.br
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" /> Sapucaia do Sul, RS
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-zinc-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  <Youtube size={24} />
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
    </div>
  );
}
