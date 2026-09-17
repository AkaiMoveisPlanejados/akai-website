// Sitemap. Duas coisas importam aqui além da lista de endereços:
//
// 1. `lastModified` precisa ser a data em que a página mudou de verdade. Antes
//    era `new Date()`, ou seja, a hora do build: todo deploy dizia ao Google que
//    as oito páginas tinham mudado, e um lastmod que sempre mente vira um campo
//    que o Google passa a ignorar.
//
// 2. As fotos entram como <image:image>. O que a Akai vende é o móvel montado, e
//    é por foto que boa parte da busca acontece. Foto cedida por fabricante fica
//    de fora: não é projeto nosso, e a licença dela está em /licenca-de-imagens.

import { linhas, atualizacaoDe } from "./data/linhas";
import { projetos, PORTFOLIO_ATUALIZADO_EM } from "./data/projetos";

const SITE_URL = "https://www.akaimoveis.com.br";

// A página de licença não mostra projeto, então segue a própria revisão.
const LICENCA_REVISADA_EM = "2026-07-28";

const fotosDe = (filtro) =>
  projetos
    .filter((p) => !p.fabricante && filtro(p))
    .flatMap((p) => p.imagens.map((img) => `${SITE_URL}${img.src}`));

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: PORTFOLIO_ATUALIZADO_EM,
      changeFrequency: "weekly",
      priority: 1,
      images: fotosDe(() => true),
    },
    // páginas por ambiente, geradas a partir da mesma fonte que as monta
    ...linhas.map((l) => ({
      url: `${SITE_URL}/${l.slug}`,
      lastModified: atualizacaoDe(l),
      changeFrequency: "monthly",
      priority: 0.8,
      images: fotosDe((p) => p.categoria === l.categoria && p.tipo === l.tipo),
    })),
    {
      url: `${SITE_URL}/licenca-de-imagens`,
      lastModified: LICENCA_REVISADA_EM,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
