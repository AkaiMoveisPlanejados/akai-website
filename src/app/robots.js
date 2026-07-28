const SITE_URL = "https://www.akaimoveis.com.br";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
    // llms.txt fica em /llms.txt — resumo da empresa para crawlers de IA
  };
}
