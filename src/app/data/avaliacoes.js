// Busca das avaliações do Google, usada no servidor.
//
// Existe porque o texto das avaliações precisa sair no HTML. Até agora ele era
// buscado no navegador, depois do carregamento: o visitante via, mas o Google e
// os crawlers de IA recebiam só a nota e a contagem. As 126 avaliações — o
// conteúdo mais confiável que a empresa tem, escrito por outras pessoas —
// ficavam invisíveis para quem decide o ranking.
//
// A rota /api/reviews continua existindo e usa esta mesma função, para o
// carrossel poder recarregar sem duplicar a lógica.

const PLACE_ID = 'ChIJhx31gjRvGZURNECVHA6IrZw';

// 6 horas. A Places API é cobrada por chamada, e nota e contagem mudam devagar.
export const CACHE_SEGUNDOS = 21600;

// Usados se a API falhar ou não estiver configurada, para o site não quebrar.
// Conferidos no Google Business Profile em 27/07/2026.
export const PADRAO = { rating: 4.8, total: 126, reviews: [], fonte: 'padrao' };

export async function buscarAvaliacoes() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return PADRAO;

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews` +
    `&language=pt-BR&key=${apiKey}`;

  try {
    const resposta = await fetch(url, { next: { revalidate: CACHE_SEGUNDOS } });
    const dados = await resposta.json();

    if (dados.status !== 'OK') {
      console.error('Places API:', dados.status, dados.error_message || '');
      return PADRAO;
    }

    const r = dados.result || {};
    return {
      rating: typeof r.rating === 'number' ? r.rating : PADRAO.rating,
      total:
        typeof r.user_ratings_total === 'number'
          ? r.user_ratings_total
          : PADRAO.total,
      reviews: (r.reviews || []).map((review) => ({
        name: review.author_name,
        avatar: review.profile_photo_url,
        time: review.relative_time_description,
        rating: review.rating,
        text: review.text,
      })),
      fonte: 'google',
    };
  } catch (erro) {
    console.error('Falha ao buscar avaliações:', erro);
    return PADRAO;
  }
}
