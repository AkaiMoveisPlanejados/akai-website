// Dois caminhos, de propósito.
//
// GTMEvent empurra para o dataLayer e só vira alguma coisa se existir um
// acionador no GTM escutando aquele evento. Continua aqui porque as tags de
// WhatsApp, Meta e Google Ads já foram montadas em cima dele.
//
// evento() fala direto com a tag do Google, que o contêiner já carrega. Não
// precisa de tag, acionador nem variável no GTM: o nome do evento e os
// parâmetros chegam ao GA4 como foram escritos. É o caminho das métricas novas
// — instrumentar no código sai mais barato do que manter uma configuração
// espelhada na interface do GTM, que foi justamente o que deixou vinte
// interações do site sendo empurradas para o dataLayer sem ninguém escutando.

export const GTMEvent = (event, data) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
};

export const evento = (nome, parametros = {}) => {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', nome, parametros);
    return;
  }
  // se a tag do Google ainda não carregou, o push segura o evento na fila
  if (window.dataLayer) window.dataLayer.push({ event: nome, ...parametros });
};
