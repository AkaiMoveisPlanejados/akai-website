/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // As fotos do portfólio também são servidas cruas, fora do /_next/image:
        // é o que o og:image, o schema, o sitemap de imagens e os robôs de IA
        // buscam. Por padrão a Vercel manda `max-age=0, must-revalidate` no que
        // vem de /public, então cada passada de robô rebaixava as 53 fotos.
        source: "/projetos/:foto*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
