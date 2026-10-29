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
