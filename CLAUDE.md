# CLAUDE.md

Site da **Akai Móveis e Ambientes Planejados** — Sapucaia do Sul/RS, desde 2009.
Loja de móveis planejados e modulados.

Detalhamento estratégico em [`docs/`](docs/README.md). Dados oficiais da empresa
(telefone, endereço, IDs, horários) em [`docs/21-dados-empresa.md`](docs/21-dados-empresa.md)
— **consulte antes de escrever qualquer informação de contato.**

---

## Stack

Next.js 15 (App Router, JavaScript — não TypeScript) · Tailwind · Vercel.

```
src/app/
  layout.js                     metadata, schema, GTM, Meta Pixel, Google Ads
  page.js                       homepage (página única)
  robots.js  sitemap.js         gerados pelo Next, não são arquivos estáticos
  data/akai-structured-data.json  JSON-LD completo (@graph), importado no layout
  components/                   MainBanner, Sobre, PlanejadosModulados,
                                PinterestGallery, GoogleReviews, ContactForm, Footer
  api/reviews/                  busca avaliações reais na Google Places API
  api/send-email/               envio do formulário de orçamento
```

Domínio registrado no Registro.br, DNS na GoDaddy, deploy na Vercel a cada push
na `main`.

---

## Estado real do site

**É uma página única.** A navegação são âncoras (`#início`, `#sobre`,
`#projetos`, `#contato`). Não existem `/cozinhas-planejadas`, `/blog` nem páginas
por ambiente.

Os documentos `10-site.md` a `13-cozinhas-moduladas.md` descrevem um site de nove
páginas. **Isso é o alvo, não o que existe.** Não presuma que essas rotas existem.

O portfólio (17 projetos) está hospedado no **Pinterest**, não no domínio. O
`ItemList` do schema aponta para lá.

---

## Posicionamento

A comunicação prioriza **cozinhas planejadas** e **cozinhas moduladas**, nessa
ordem. Os demais ambientes existem e são vendidos, mas são secundários.

Isso não é preferência estética: é o que concentra volume de busca e diferencia a
Akai de "mais uma loja de móveis". Ver `docs/02-posicionamento.md`.

Ao escrever qualquer texto novo, pergunte se ele reforça cozinha. Se for neutro,
provavelmente dá pra melhorar.

---

## Regras duras

**Nunca afirmar sem prova:** "maior da região", "líder", "melhor", "número um".
Use fatos verificáveis — desde 2009, equipe própria, 100% MDF, 4,8 no Google com
126 avaliações.

**Nunca inventar dados de contato.** Telefone, e-mail, endereço e horário saem do
`docs/21-dados-empresa.md`. Um e-mail com domínio errado ficou publicado no site
e só foi descoberto em auditoria.

**Nunca marcar avaliações como `Review` no schema.** O Google não aceita
avaliação auto-declarada em `LocalBusiness` desde 2019. As estrelas vêm do Google
Business Profile. Decisão 12 em `docs/20-decisoes.md`.

**Nunca usar `<meta name="keywords">`.** Foi removida por conter repetição
excessiva. O Google a ignora desde 2009 e a repetição é sinal de spam.

**Não remover a meta `google-site-verification`** do `layout.js` — ela sustenta a
propriedade verificada no Search Console.

**Sempre `www` e `https`.** O apex redireciona com 308 permanente. Canonical,
schema e sitemap usam `https://www.akaimoveis.com.br`.

---

## Convenções

Metadados vão pela API `metadata` do `layout.js`, nunca como `<meta>` solto no
`<head>` — assim valem para páginas futuras automaticamente.

Ao criar páginas novas, adicione-as ao `src/app/sitemap.js`.

O JSON-LD é um arquivo de dados. Ao alterá-lo, valide o JSON e confirme que os
`@id` continuam resolvendo dentro do `@graph`.

Textos em português do Brasil. `lang="pt-BR"`.

Rode `npm run build` antes de commitar — o build valida o JSON-LD por importação.

---

## Prioridades ao sugerir melhorias

1. Experiência do usuário
2. Conteúdo de qualidade
3. SEO
4. GEO (mecanismos de IA)
5. Conversão
6. Performance técnica

Nunca sacrifique a experiência do usuário por métrica de SEO.

---

## Pendências conhecidas

- `<h1>` da homepage é "APARTAMENTO COMPLETO" — não menciona cozinha nem a cidade.
  Será resolvido quando o hero for refeito
- O `Product` do apartamento no schema não tem `image`, então não é elegível a
  rich result
- Portfólio fora do domínio (Pinterest)
- Não existem as landing pages de cozinha planejada e modulada
- Google Analytics não está instalado — só Ads e Tag Manager

---

## Na dúvida

Prefira construir autoridade de longo prazo a ganho rápido. Responda a dúvida
real do cliente antes de tentar vender. Use foto de projeto real da Akai em vez
de imagem genérica.
