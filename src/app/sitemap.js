import { linhas } from "./data/linhas";

const SITE_URL = "https://www.akaimoveis.com.br";

export default function sitemap() {
  const agora = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: agora,
      changeFrequency: "weekly",
      priority: 1,
    },
    // páginas por ambiente, geradas a partir da mesma fonte que as monta
    ...linhas.map((l) => ({
      url: `${SITE_URL}/${l.slug}`,
      lastModified: agora,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
