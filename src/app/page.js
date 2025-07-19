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
} from "lucide-react";
import LogoImage from "./assets/1.png";
import Image from "next/image";

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

  const navLinks = ["Início", "Projetos", "Serviços", "Sobre", "Contato"];

  // State to track the currently open FAQ item. '0' means the first item is open by default.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    // If the clicked item is already open, close it (by setting state to null).
    // Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans text-zinc-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Image
            src={LogoImage}
            alt="Akai Móveis Logo"
            style={{ objectFit: "contain", marginTop: "5px" }}
            priority
            width={130}
            height={10}
          />
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-600 hover:text-red-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-zinc-600 hover:text-red-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-red-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-red-400">
              <Youtube size={20} />
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-600 hover:text-red-400 transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a href="#" className="text-zinc-600 hover:text-red-400">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-zinc-600 hover:text-red-400">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-zinc-600 hover:text-red-400">
                  <Youtube size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 99%, rgba(237, 221, 83, 0) 100%),
    url('/images/hero.jpeg')`,
          }}
          id="início"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
            <h1 className="min-[320px]:text-[26px] min-[768px]:text-[40px] font-bold">
              APARTAMENTO COMPLETO
            </h1>
            <p className="min-[320px]:text-[10px] min-[768px]:text-sm">
              Cozinha + Quarto Casal + Quarto Solteiro + Lavanderia + Home +
              Banheiro
            </p>
            <h2 className="mt-2 min-[320px]:text-[18px] min-[768px]:text-[26px] font-bold">
              MÓVEIS MODULADOS E PLANEJADOS
            </h2>
            <div className="min-[320px]:mt-2 min-[768px]:mt-4 flex items-center justify-center space-x-1">
              <span className="self-start text-sm font-regular">
                A partir de R$
              </span>
              <span className="text-4xl self-center font-bold text-red-400">
                {" "}
                18.500
              </span>
              <span className="self-end text-sm font-regular">à vista</span>
            </div>
            <div className="min-[320px]:mt-6 min-[768px]:mt-4 flex items-center justify-center space-x-1">
              <span className="text-sm self-start font-bold">ou 18x de R$</span>
              <span className="self-center text-4xl font-bold text-red-400">
                1.099
              </span>
            </div>
            <p className="text-[12px] text-center max-w-md">
              Valores referentes somente a parte modulada e planejada
            </p>
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
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
                  Por dentro da Akai Móveis Ambientes Planejados
                </h1>
                <p className="text-zinc-600 leading-relaxed mb-8">
                  A Akai Móveis Ambientes Planejados nasceu da paixão por criar
                  espaços que inspiram, acolhem e funcionam com excelência.
                  Atuamos com projetos de interiores residenciais, corporativos
                  e comerciais oferecendo soluções completas do planejamento à
                  entrega final com agilidade, estática e personalização. Nosso
                  compromisso é entregar mais do que ambientes planejados:
                  entregamos ambientes prontos para viver.
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
                      mínimos detalhes é assim que a Akai Móveis Ambientes
                      Planejados entrega experiências.
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

        <section className="bg-white font-sans" id="serviços">
          <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left Column: Image */}
              <div className="relative h-full w-full">
                <img
                  src="https://placehold.co/600x750/333333/FFFFFF?text=Foto+de+Designer+Trabalhando"
                  alt="Interior designer working on a project at her desk"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  NOSSOS SERVIÇOS
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  Projetos de Interiores Pensados Para Sua Rotina, Seu Estilo e
                  Seu Espaço
                </h1>

                <p className="mt-4 text-base leading-7 text-zinc-600">
                  Cada projeto da Akai Móveis Ambientes Planejados é único
                  porque cada cliente é único. Nossas soluções unem design
                  autoral, funcionalidade e um atendimento próximo e consultivo,
                  com foco em transformar ambientes em experiências completas.
                </p>

                {/* Features List */}
                <div className="mt-8">
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-red-400 mr-3 mt-1" />
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                  <a href="#contato" className="cursor-pointer transform rounded-md bg-zinc-800 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">
                    SOLICITAR ORÇAMENTO
                  </a>
                  <a href="#projetos" className="cursor-pointer transform rounded-md border border-zinc-900 bg-transparent px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">
                    CONHECER PROJETOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Nossos Projetos
            </h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12">
              Inspire-se com alguns dos ambientes que já transformamos. Cada
              projeto é único, pensado para atender às necessidades e sonhos de
              nossos clientes.
            </p>

            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {[
                "Todos",
                "Cozinhas",
                "Dormitórios",
                "Banheiros",
                "Escritórios",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`cursor-pointer px-6 py-2 rounded-full font-semibold transition-colors ${filter === cat ? "bg-red-400 text-white" : "bg-white text-zinc-700 hover:bg-red-100"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.category}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-wide text-red-400">
                Perguntas Frequentes
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Tire Suas Dúvidas Antes de Iniciar Seu Projeto
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Respondemos com clareza e transparência as perguntas mais comuns
                sobre nossos serviços, prazos, garantias e formas de pagamento.
              </p>
            </div>

            <div className="mt-16">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="pt-2">
                    {isOpen ? (
                      // --- Expanded State ---
                      <div className="overflow-hidden rounded-lg bg-zinc-800 shadow-md">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="cursor-pointer flex w-full items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-white">
                            {faq.question}
                          </span>
                          <span className="text-white">
                            <MinusIcon />
                          </span>
                        </button>
                        <div className="rounded-b-lg bg-white p-6">
                          <p className="text-zinc-600">{faq.answer}</p>
                        </div>
                      </div>
                    ) : (
                      // --- Collapsed State ---
                      <div className="border-b border-zinc-200">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="cursor-pointer flex w-full items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-zinc-800">
                            {faq.question}
                          </span>
                          <span className="text-zinc-400">
                            <PlusIcon />
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fale Conosco
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer w-full bg-red-400 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Telefone</h3>
                    <p className="text-zinc-600">(48) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-zinc-600">
                      contato@newhomeplanejados.com.br
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Endereço</h3>
                    <p className="text-zinc-600">
                      Rua Exemplo, 123 - Florianópolis, SC
                    </p>
                  </div>
                </div>
                <div className="h-64 w-full rounded-lg overflow-hidden mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.736993164998!2d-48.556847885449!3d-27.59482298283627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738363a0b8f9f%3A0x5a4d8d3e9b3a0a0!2sFlorian%C3%B3polis%2C%20State%20of%20Santa%20Catarina%2C%20Brazil!5e0!3m2!1sen!2sus!4v1658249622502!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Akai Móveis.</h3>
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
                  <Phone size={16} className="mr-2" /> (48) 1234-5678
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" /> contato@newhome.com
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" /> Florianópolis, SC
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
