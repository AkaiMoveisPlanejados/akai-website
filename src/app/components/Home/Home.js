"use client";

import GoogleReviews from "@/app/components/GoogleReviews/GoogleReviews";
import PlanejadosModulados from "@/app/components/PlanejadosModulados/PlanejadosModulados";
import Projetos from "@/app/components/Projetos/Projetos";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import FAQ from "@/app/components/FAQ/FAQ";
import MainBanner from "@/app/components/MainBanner/MainBanner";
import Sobre from "@/app/components/Sobre/Sobre";
import Footer from "@/app/components/Footer/Footer";
import BotoesFlutuantes from "@/app/components/BotoesFlutuantes/BotoesFlutuantes";

export default function Home() {
  return (
    <div className="bg-white font-sans text-zinc-800">
      <main className="min-h-screen">
        <MainBanner />
        <Sobre />
        <PlanejadosModulados />
        <Projetos />
        <GoogleReviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <BotoesFlutuantes />
    </div>
  );
}
