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
// Conferidos no Google Business Profile em 13/11/2026.
export const PADRAO = { rating: 4.8, total: 167, reviews: [], fonte: 'padrao' };

export async function buscarAvaliacoes() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return PADRAO;

  // Places API (New). A Legacy não pode mais ser ativada em projeto novo
  // desde out/2026. O field mask define a faixa de cobrança: pedir só o usado.
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=pt-BR`;

  try {
    const resposta = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
      next: { revalidate: CACHE_SEGUNDOS },
    });
    const r = await resposta.json();

    if (!resposta.ok || r.error) {
      console.error('Places API:', r.error?.status || resposta.status, r.error?.message || '');
      return PADRAO;
    }

    return {
      rating: typeof r.rating === 'number' ? r.rating : PADRAO.rating,
      total:
        typeof r.userRatingCount === 'number'
          ? r.userRatingCount
          : PADRAO.total,
      reviews: (r.reviews || []).map((review) => ({
        name: review.authorAttribution?.displayName,
        avatar: review.authorAttribution?.photoUri,
        time: review.relativePublishTimeDescription,
        rating: review.rating,
        text: review.text?.text || review.originalText?.text || '',
      })),
      fonte: 'google',
    };
  } catch (erro) {
    console.error('Falha ao buscar avaliações:', erro);
    return PADRAO;
  }
}
