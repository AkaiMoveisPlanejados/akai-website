"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

// Mock data for the dropdown. You can change this later.
const subjects = [
  "Abaixo de 10 mil",
  "De 11 a 20 mil",
  "De 20 a 30 mil",
  "De 30 a 50 mil",
  "+ 50 mil",
];

export default function ContactForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0], // Set a default value for the dropdown
  });

  // State to show submission status (e.g., "Enviando...", "Mensagem enviada!")
  const [status, setStatus] = useState('');

  // Updates state when user types in an input field
  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'phone') {
      // Remove all non-digit characters
      let input = value.replace(/\D/g, '');
      // Limit to 11 digits (XX) XXXXX-XXXX
      input = input.substring(0, 11); 

      let maskedValue = input;
      // Apply mask: (XX) XXXXX-XXXX
      if (input.length > 2) {
        maskedValue = `(${input.substring(0, 2)}) ${input.substring(2)}`;
      }
      if (input.length > 7) {
        maskedValue = `(${input.substring(0, 2)}) ${input.substring(2, 7)}-${input.substring(7)}`;
      }
      
      setFormData((prevData) => ({
        ...prevData,
        phone: maskedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the browser from reloading the page
    setStatus('Enviando...');

    try {
      // Send the form data to our API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(`Mensagem enviada com sucesso!`);
        // Clear the form after successful submission
        setFormData({ name: '', email: '', phone: '', subject: subjects[0] });
      } else {
        const result = await response.json();
        setStatus(`Erro ao enviar mensagem: ${result.error || 'Tente novamente.'}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <section id="contato" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Fale Conosco
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* The form now has an onSubmit handler */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
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
                placeholder="email@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
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
                placeholder='(XX) XXXXX-XXXX'
                value={formData.phone}
                onChange={handleChange}
                maxLength="15" 
                required
                className="mt-1 block w-full px-4 py-3 border border-zinc-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-zinc-700"
              >
                Previsão de investimento
              </label>
              <div className="relative mt-1">
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-zinc-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400 bg-white pr-10"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <ChevronDown className="h-5 w-5 text-zinc-500" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-red-400 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition-colors"
            >
              Enviar Mensagem
            </button>
            {/* Display the status message to the user */}
            {status && <p className="text-center mt-4 text-zinc-600">{status}</p>}
          </form>
          {/* The contact details and map remain on the right side */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Phone className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Telefone</h3>
                <p className="text-zinc-600">(051) 981150097</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Mail className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-zinc-600">
                  akaimoveiseplanejados@gmail.com.br
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
                  R. Otaviano Silveira, 545 - Centro, Sapucaia do Sul - RS, 93214-500
                </p>
              </div>
            </div>
            <div className="h-64 w-full rounded-lg overflow-hidden mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.104762998902!2d-51.1533831!3d-29.821247900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f3482f51d87%3A0x9cad880e1c954034!2sAkai%20M%C3%B3veis%20e%20Ambientes%20Planejados!5e1!3m2!1spt-BR!2sbr!4v1753043920229!5m2!1spt-BR!2sbr"
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
  );
}
