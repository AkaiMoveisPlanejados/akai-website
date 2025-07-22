"use client";

import GoogleReviews from "./components/GoogleReviews/GoogleReviews";
import PlanejadosModulados from "./components/PlanejadosModulados/PlanejadosModulados";
import PinterestGallery from "./components/PinterestGallery/PinterestGallery";
import ContactForm from "./components/ContactForm/ContactForm";
import MainBanner from "./components/MainBanner/MainBanner";
import Sobre from "./components/Sobre/Sobre";
import Footer from "./components/Footer/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton/WhatsAppFloatingButton";

export default function LandingPage() {
  return (
    <div className="bg-white font-sans text-zinc-800">
      <main className="min-h-screen">
        <MainBanner />
        <Sobre />
        <PlanejadosModulados />
        <PinterestGallery />
        <GoogleReviews />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
