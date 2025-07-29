import * as React from 'react';

export const EmailTemplate = ({ name, email, phone, city, message, subject }) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f9f9f9' }}>
    <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '30px' }}>
      <h2 style={{ color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        Nova Mensagem de Contato
      </h2>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Você recebeu uma nova mensagem através do formulário do site Akai Móveis.
      </p>
      <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
        <p><strong>Assunto:</strong> {subject}</p>
        <p><strong>Nome:</strong> {name}</p>
        <p><strong>Cidade/Estado:</strong> {city}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Telefone:</strong> {phone}</p>
        <p><strong>Mensagem:</strong> {message}</p>
      </div>
      <p style={{ marginTop: '30px', fontSize: '12px', color: '#999', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        Esta é uma mensagem automática enviada pelo seu site.
      </p>
    </div>
  </div>
);
