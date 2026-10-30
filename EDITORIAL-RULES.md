# BootsGuide — regras para os próximos artigos

Usar sempre a versão mais recente deste pacote como base.

- Todo comparativo termina com a seção `More comparisons`, após FAQ/fontes, dentro de `.article-content`, com dois cards de comparativos existentes e relevantes.
- Todo review termina com a seção `Related guides`, exatamente com esse título, contendo apenas cards de outros REVIEWS existentes em `/reviews/`. Nunca colocar comparativos ou guias nessa seção. Usar dois modelos relevantes, sem repetir o próprio artigo.
- Na página `/reviews/`, o modelo novo ocupa o único card principal `.index-feature`. O destaque anterior passa para os cards menores. Cada review aparece uma única vez, sem duplicar o novo destaque na grade.
- Cards editoriais devem ser clicáveis por inteiro, com foco de teclado visível e link principal acessível.
- Conferir imagens reais antes de integrar. Preservar proporção e exibir toda a bota com `object-fit: contain`; não usar `cover` para produtos. Para a 2976, usar o arquivo local completo e a classe `product-photo-frame` nos contêineres de foto. Aplicar a mesma imagem correta em home, Reviews, hub da marca, review, bloco Amazon e metadados.
- Preservar links e tags afiliadas, aviso de comissão, botões Amazon, atalho móvel e comportamento dos scripts existentes. Não escrever `AFFILIATE LINKS` nos blocos ou botão móvel.
- Usar Article + BreadcrumbList + FAQPage coerentes com o conteúdo visível; não adicionar Product incompleto. Não alegar teste prático inexistente.
- Conferir links internos, imagens locais, âncoras, schema, destaque sem duplicação e seções finais antes de empacotar. Preparado não significa publicado.

## Imagens de comparativos — padrão obrigatório

- Toda capa e card de comparativo usa o componente `.boot-pair` com as duas fotos reais dos modelos lado a lado, na mesma ordem do título/URL, com número e cor abaixo. Referência: 1609 vs 550.
- Aplicar também em More comparisons, Related guides, home, hubs e páginas de listagem. Nunca representar um comparativo por uma bota isolada nem reutilizar uma montagem antiga de estilo diferente.
- Reutilizar `/assets/css/boot-pair-20261014-r3.css`, `.boot-pair-item` e `.boot-pair-photo`; imagens inteiras com `object-fit: contain`, sem corte ou distorção. A classe `.boot-pair-photo` separa a altura da foto da legenda.
- Fotos individuais dentro de seções sobre um único modelo e dos blocos de compra continuam individuais.

## Padrão visual de produtos — todas as marcas

- Reviews, cards, blocos Amazon e hubs: foto de uma bota inteira em perfil, formato horizontal 3:2 (referência 750×500), fundo branco, margens equilibradas e escala semelhante à Blundstone 550. Nunca deixar grande faixa vazia, fundo bege irregular, produto cortado ou imagem esticada.
- Usar `.product-photo-frame` e `.product-photo` com `product-images-20261014-r3.css` para novas fotos. Manter `object-fit: contain`. Revisar cada foto antes de publicar.
- Comparações: duas fotos padronizadas lado a lado, mesmo enquadramento e fundo, na ordem dos modelos do título; número/modelo e cor abaixo, usando o componente boot-pair vigente.
- Aplicar o mesmo padrão a Dr. Martens, Timberland, Red Wing, Redback e futuras marcas. A origem da marca não muda o padrão visual. Preservar cores, couro, costura, solado e proporções do produto.
- Fonte atual da 2976: foto oficial NX_22227001.80; edição pelo recurso integrado de imagem para fundo branco e enquadramento horizontal. Arquivo final: assets/images/dr-martens-2976-smooth-standard-r2.png (1536×1024). Original preservado: dr-martens-2976-smooth-full.png. A legenda informa a edição com IA.
- Instrução usada na edição: manter a 2976 YS Smooth preta original, bota inteira de perfil para a direita, fundo branco, formato 3:2, escala e margens semelhantes à Blundstone 550, sem adicionar textos ou redesenhar detalhes.

## Categorias das seções finais (regra confirmada em 15/10/2026)

- Todos os reviews: título exato `Related guides`, mas cards exclusivamente de outros reviews (`/reviews/`). O título deve permanecer assim por preferência do usuário.
- Todos os comparativos: título exato `More comparisons`, cards exclusivamente de outros comparativos (`/comparisons/`), com a dupla correta de botas.
- Não usar títulos alternativos como Continue comparing, Continue researching, Compare before buying ou Read the full reviews nessas seções. Não misturar categorias.
- Essas regras se aplicam somente à seção final de cards relacionados: links úteis no corpo do artigo podem continuar apontando para reviews, comparações e guias.

- 16/10/2026: preparado comparativo 585 vs Dr. Martens 2976 YS Smooth (22227001), sem publicação automática. Links afiliados originais preservados; foto dupla, More comparisons, hubs e índice de busca atualizados.

## 19 October 2026 — 1460 preparation
Prepared /reviews/dr-martens-1460-smooth-review/; not deployed. Reference adult black 11822006. Preserve affiliate https://link.amazon/B0hfTAIbd; user supplied replacement affiliate link; keep the standard selected-variant check. Latest review is the single Reviews feature; previous feature moves to smaller cards. Keep Related guides review-only, update search and sitemap with each article, and use the same uncropped white-background product asset everywhere.

## 20 October 2026
Prepared /comparisons/blundstone-566-vs-585/; publication pending. Official UK sources checked; existing 566/585 affiliate URLs preserved. Two-boot layout and comparison-only More comparisons maintained. No personal testing or live retailer stock claimed.

## 21 October 2026 — 585 revision prepared
Same URL /reviews/blundstone-585/; publication pending. Updated fit checklist, cautious walking/comfort claims, weather limits, waxed-nubuck care, official £185 reference, FAQs and source date. Original affiliate URLs/tag preserved; related cards remain review-only. Local purchase anchors and mobile-bar logic checked. Amazon live availability could not be confirmed. No account access to Search Console/Amazon or country-specific OneLink validation; no sales/traffic metrics claimed.

## 22 October 2026 — sizing guide prepared
Prepared /guides/dr-martens-size-guide/; publication pending. Current official UK chart checked, including 6.5 and 9.5. Original 1460/2976 affiliate URLs preserved. Integrated home, Guides, brand hub, search and sitemap; contextual review links retain review-only related cards. No stock or hands-on testing claimed.

- Ao adicionar artigos, atualizar também os totais visíveis na home (reviews, comparações e guides), conferindo a quantidade real de páginas. Em 22/10/2026: 8 guides.

- Guias: seção final Related reading deve conter somente outros guias em /guides/, nunca reviews ou comparativos. Manter dois cards, sem repetir o artigo atual.

- 22/10: Related reading padronizado nos oito guias, com dois cards somente de outros guias. Aviso final usa .disclosure.disclosure-end e texto Affiliate disclosure: BootsGuide may earn a commission from qualifying purchases. This never changes the price you pay or the specifications we report. Preservar também o aviso Amazon nos blocos de compra.

## 23 October 2026
Prepared Timberland Premium vs 566 comparison; not published. Original affiliate links retained, paired imagery, comparison-only More comparisons, home count, hubs and search updated. UK manufacturer sources checked; no live Amazon stock or hands-on test claimed.

## 26 October 2026
Prepared UBOK review; not deployed. Affiliate https://link.amazon/B0dHGZPxZ preserved; destination not independently verified. Official UK product, sizing and care checked. Original manufacturer photo in uncropped 3:2 CSS frames. Reviews feature unique, old feature demoted; home 14 reviews, Redback hub active, search and sitemap updated. Related guides contains only reviews. No wear test claimed.

27 October 2026: 2056 vs 500 comparison prepared, not deployed. Existing exact Amazon links preserved. Home: 14 reviews, 13 comparisons, 8 guides.

## 28 October 2026 — 500 revision prepared
Same URL /reviews/blundstone-500/; publication pending. Official UK #500 page, size guide and boot-care guide rechecked. Corrected the footbed claim: the 500 lists XRD® technology in the heel as part of SPS MAX Comfort (previously said it lacked XRD). Added indoor fit checklist, cautious walking wording, full-grain care steps, official £175 reference, five FAQs (schema matches visible text) and a 500 vs 585 link. Original Amazon URL/tag preserved; the old long link (ASIN B00GB3X8YA, slug "Chelsea-Black") returned an Amazon error page; on 28 October 2026 it was replaced everywhere with the user-supplied https://link.amazon/B0bEQV2h8 (not independently verified; confirm it opens the Stout Brown option). Sitemap lastmod, search index and llms.txt updated. No Search Console/Amazon data was available; no traffic or sales metrics claimed. No new article added; Reviews feature and home counts unchanged.

## 28 October 2026 — Amazon links standardised
User-supplied Amazon shortlinks now used site-wide: 585 https://link.amazon/B08aNDPOQ; 550 https://link.amazon/B0bIAT4EV; 2056 https://link.amazon/B04WLYBQF; 566 https://link.amazon/B05oYjbLG; 510 https://link.amazon/B0dUPlMEf (replaced the /s search link); 558 https://link.amazon/B07rJmFRm and 587 https://link.amazon/B09G5k4hH (replaced amzn.to); 500 https://link.amazon/B0bEQV2h8. All Amazon buttons now start with https://link.amazon/. Links were not independently verified; test each destination (model, colour, UK size) before publishing.

## 29 October 2026 — Redback size guide prepared
Prepared /guides/redback-size-guide/; publication pending. Sources checked 29 October: Redback USA sizing page, a trade distributor's Redback size guide (conversion table, foot length, half-size width) and UK retailer sizing notes (labelled as retailer advice). Redback UK size guide cited as last checked 26 October (UBOK review); it could not be re-fetched. Source conflict on width (G vs B-EEE) stated, not resolved. Affiliate https://link.amazon/B0dHGZPxZ (UBOK) preserved, destination not verified. Integrated: guides index (new first card), home latest grid (9 guides), Redback hub, search, sitemap, llms.txt; contextual link added in UBOK review. Related reading contains only the Blundstone and Dr. Martens size guides. No stock, hands-on test or Search Console data claimed.

## 29 October 2026 — sitemap and comparisons card
Sitemap rewritten and ordered (home, reviews, comparisons, guides, brands, trust pages): 49 URLs, all indexable pages included plus /brands/red-wing/ at the user's request. Left out on purpose: /privacy-policy/, /terms/ (no contact page exists), /search/ and 404. Note: /brands/red-wing/ is still noindex,follow and says it will stay out of search until its first article cluster is ready, so Search Console may report it as "submitted URL marked noindex"; decide whether to switch it to index or remove it from the sitemap. Fixed the featured-card button on /comparisons/: it read "Compare 1609 & 585" and now reads "Compare 2056 & 500" for the 2056 vs 500 article. All 16 "Compare X & Y" buttons site-wide checked against their URLs.

## 29 October 2026 — sitemap correction
Per the user: /brands/red-wing/ removed from the sitemap again (no Red Wing reviews yet; it stays noindex until the first article cluster exists) and /editorial-policy/ and /affiliate-disclosure/ removed as well. Sitemap now has 46 URLs. Removal from the sitemap does not by itself stop indexing: those two pages are still indexable (index,follow) and linked from the footer; add noindex only if the user wants them out of search results.

## 29 October 2026 — sitemap final
Per the user: /editorial-policy/ and /affiliate-disclosure/ kept in the sitemap (lastmod 2026-08-21). /brands/red-wing/ stays out (noindex, no reviews yet). /privacy-policy/, /terms/, /search/ and 404 stay out. Sitemap: 48 URLs.

## 29 October 2026 — /guides/ image fix
Cause: guides/index.html did not load product-images-20261014-r3.css, so .product-photo-frame had no styling and the near-square Redback UBOK photo (1080x1021) overflowed the 3:2 card and was cropped (the Dr. Martens card only looked fine because its PNG is already 3:2). Added the stylesheet to the head of guides/index.html (same position as in the other pages). Audited all pages: every page that uses .product-photo-frame now loads that CSS. Not verified in a browser from the build environment; check /guides/ visually before deploying.

## 29 October 2026 — Redback UBOK image standardised
Per the user, the UBOK photo now follows the site standard (white background, 3:2, whole boot, balanced margins). New file assets/images/redback-bobcat-ubok-standard.jpg (1536x1024): original manufacturer photo with the near-white background levelled to pure white (no AI generation), boot cropped to its edges and centred at about 86% of the frame height. Original kept as assets/images/redback-bobcat-ubok.jpg. Used in home, Reviews, Guides, Redback hub, UBOK review, Redback size guide, Amazon blocks and og/twitter/schema metadata. Captions on the review and the guide say that background and framing were adjusted. The photo is a 3/4 angle, not a pure side profile; there is no profile photo available.

## 29 October 2026 — performance and accessibility pass
Audit (static; Lighthouse/PageSpeed could not be run from the build environment). Hero images are small WebP (10-30 KB), no web fonts, CSS/JS/images cached immutable, scripts deferred. Changes: (1) comparisons/timberland-6inch-premium-vs-blundstone-566 had 6 images loading eagerly, four of them below the fold; now only the two hero images are eager. (2) Added <link rel="preload" as="image" fetchpriority="high"> for the hero image(s) on all review, comparison and guide pages (placed before the stylesheets) so the browser finds the LCP image earlier. (3) Home, hubs and brand pages: images without a loading attribute now load lazily (logo and fetchpriority images excluded). (4) Accessibility: the aria-label of every Amazon button (92 buttons, 30 pages) did not contain the visible text (WCAG 2.5.3 label-in-name); it now starts with the visible text, e.g. "Check 1306 on Amazon (opens in a new tab)". The Amazon button colours were already compliant (#17212c on #ff9900 = 7.6:1; hover 9.9:1). Alt text "585 585" and "2976 2976" fixed on 6 pages. Open items: 26 images are hotlinked from blundstone.co.uk (1609 photos etc.) and should be copied locally; on mobile review/comparison pages Google Analytics loads automatically 3 seconds after page start (assets/js/analytics-20261009-r4.js).

## 29 October 2026 — Blundstone 1609 images localised
The three Blundstone 1609 photos that were hotlinked from blundstone.co.uk (front/profile, pair, lifestyle) are now local WebP files at 750x500: assets/images/blundstone-1609-front.webp, -pair.webp, -life.webp. Source: the Blundstone UK product photos supplied by the user. First version used 500x500 files (upscaled, soft); replaced the same day with the 1600x1600 originals, downscaled to 750x500 for sharpness. Studio shots: off-white background levelled to white, boot cropped and centred; the lifestyle photo is cropped to 3:2. All 38 references updated (img, preload, og:image, twitter:image, schema). No external images remain on the site. Script kept as localizar_imagens_1609.py (outside the site folder).
