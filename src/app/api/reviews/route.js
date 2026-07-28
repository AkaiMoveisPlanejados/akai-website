// Rota das avaliações do Google.
//
// A lógica vive em data/avaliacoes.js porque agora ela também roda no servidor,
// na renderização da home — o texto das avaliações precisa sair no HTML, não só
// chegar depois por esta rota.

import { NextResponse } from 'next/server';
import { buscarAvaliacoes } from '@/app/data/avaliacoes';

// Precisa ser um literal: o Next não aceita variável nem expressão aqui.
export const revalidate = 21600;

export async function GET() {
  return NextResponse.json(await buscarAvaliacoes(), { status: 200 });
}
