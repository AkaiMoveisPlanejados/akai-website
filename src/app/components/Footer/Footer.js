import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

function Footer() {
    const navLinks = ["Início", "Projetos", "Sobre", "Contato"];
    return (
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
                  <Phone size={16} className="mr-2" /> (051) 98115-0097
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
    );
}

export default Footer;