// Página inicial. É um componente de servidor cuja única função é injetar o
// JSON-LD da home; a interface fica em components/Home, que é client.
// Antes o schema era injetado no layout, o que fazia todas as páginas do site
// declararem o WebPage e o FAQPage da home.

import Home from "./components/Home/Home";
import { schemaHome } from "./data/schema";
import { buscarAvaliacoes } from "./data/avaliacoes";

export default async function Page() {
  const avaliacoes = await buscarAvaliacoes();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHome()) }}
      />
      <Home avaliacoes={avaliacoes} />
    </>
  );
}
