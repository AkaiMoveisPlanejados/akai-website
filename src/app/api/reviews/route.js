// File: app/api/reviews/route.js
import { NextResponse } from 'next/server';

// Cache de 6 horas: a Places API é cobrada por chamada, e nota e número de
// avaliações mudam devagar. Sem isso, cada visita ao site vira uma cobrança.
// Precisa ser um literal — o Next não aceita variável nem expressão aqui.
export const revalidate = 21600;

const CACHE_SEGUNDOS = 21600;

// Valores de segurança, usados se a API falhar ou não estiver configurada.
// Conferidos no Google Business Profile em 27/07/2026.
const PADRAO = { rating: 4.8, total: 126 };

export async function GET(request) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJhx31gjRvGZURNECVHA6IrZw';

  if (!apiKey || !placeId || placeId === 'YOUR_PLACE_ID') {
    // Sem chave, devolve os valores de segurança para o site não quebrar.
    return NextResponse.json({ ...PADRAO, reviews: [], fonte: 'padrao' }, { status: 200 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&language=pt-BR&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: CACHE_SEGUNDOS } });
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google API Error:', data);
      return NextResponse.json({ ...PADRAO, reviews: [], fonte: 'padrao' }, { status: 200 });
    }

    const r = data.result || {};
    const reviews = (r.reviews || []).map((review) => ({
      name: review.author_name,
      avatar: review.profile_photo_url,
      time: review.relative_time_description,
      rating: review.rating,
      text: review.text,
    }));

    return NextResponse.json(
      {
        rating: typeof r.rating === 'number' ? r.rating : PADRAO.rating,
        total: typeof r.user_ratings_total === 'number' ? r.user_ratings_total : PADRAO.total,
        reviews,
        fonte: 'google',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server-side fetch error:', error);
    return NextResponse.json({ ...PADRAO, reviews: [], fonte: 'padrao' }, { status: 200 });
  }
}
