import { WhatsAppIcon } from '@/app/utils/WhatsAppIcon';
import React from 'react';

const whatsappNumber = '5551981150097'; // Replace with your WhatsApp number

function WhatsAppFloatingButton() {
    return (
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-110 z-50"
            aria-label="Fale conosco no WhatsApp"
        >
            <WhatsAppIcon size="40px" className="h-8 w-8" />
      </a>
    );
}

export default WhatsAppFloatingButton;