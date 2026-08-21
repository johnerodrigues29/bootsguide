# BootsGuide — pacote estático para Cloudflare Pages

Este pacote contém o site estático do **BootsGuide**, preparado em HTML, CSS e JavaScript puro. Não há dependência de WordPress, React, Node.js ou qualquer processo de build para a publicação.

## Publicação no Cloudflare Pages

| Etapa | Ação |
| --- | --- |
| 1 | Extraia o arquivo ZIP sem alterar a estrutura de pastas. |
| 2 | No Cloudflare Pages, crie um projeto de **Direct Upload** ou configure o repositório GitHub. |
| 3 | Faça upload do conteúdo da pasta extraída; `index.html`, `_headers`, `robots.txt` e `sitemap.xml` devem ficar na raiz. |
| 4 | Aponte o domínio `bootsguide.co.uk` e mantenha o redirecionamento de `www` para o domínio raiz configurado no Cloudflare. |
| 5 | Depois que o domínio estiver ativo, envie o sitemap em `https://bootsguide.co.uk/sitemap.xml` ao Google Search Console. |

> **Nota editorial:** os reviews, comparações, guias, páginas de categoria e hubs finalizados estão liberados para indexação. `404.html`, Política de Privacidade, Termos e os quatro hubs de marcas ainda em preparação permanecem com `noindex,follow`. O sitemap contém as 21 URLs editoriais indexáveis e foi atualizado em 21/08/2026.

## Conteúdo incluído

- Reviews completos: Blundstone 500, 550 e 585.
- Comparações: 500 vs 585 e 550 vs 585.
- Guias: melhores modelos, tamanhos, impermeabilidade, limpeza, caminhada, durabilidade e break-in.
- Diretório multimarcas: Blundstone, Dr. Martens, Timberland, Red Wing e Redback.
- Hubs futuros de Dr. Martens, Timberland, Red Wing e Redback criados com `noindex,follow` até receberem conteúdo completo.
- Páginas de confiança: Sobre, Política Editorial e Divulgação de Afiliados.
- Imagens de produto em WebP, com carregamento otimizado, texto alternativo e legendas descritivas.
- Capas padronizadas em WebP para as comparações 500 vs 585 e 550 vs 585, exibindo os dois modelos lado a lado.

## Manutenção

Os arquivos ativos de estilo e JavaScript são versionados como `style-20260821-r9.css`, `analytics-20260821-r1.js` e `main-20260817-r4.js`. Os cabeçalhos Cloudflare aplicam cache longo somente aos arquivos versionados de CSS e JavaScript; HTML e imagens seguem a revalidação padrão do Pages. Ao alterar CSS ou JS em produção, publique sempre uma nova versão de arquivo e atualize as referências HTML.

O Google Analytics usa a propriedade `G-EK6TVJV8CS`. O carregador local não cria conexão com o Google antes do consentimento: ele mostra o painel de escolha, memoriza a opção no armazenamento local do navegador e solicita o `gtag.js` de forma assíncrona somente após “Accept analytics”. A escolha pode ser revista em “Cookie settings” no rodapé. Mantenha esse comportamento e a Política de Privacidade sincronizados ao trocar a ferramenta de medição ou adicionar publicidade.

Os links afiliados da Amazon UK para os modelos 500, 550 e 585 estão ativos nos painéis de compra e configurados com `rel="sponsored nofollow noopener"`. Os painéis foram preparados para receber botões de outros varejistas no futuro. A divulgação curta aparece no final dos artigos, enquanto a página de divulgação detalha os programas participantes. Não publique preços ou disponibilidade fixos, pois ambos podem mudar no varejista.

O arquivo `llms.txt` fica na raiz e apresenta às ferramentas de IA um resumo do BootsGuide e uma seleção das páginas públicas mais relevantes. As páginas HTML também usam `rel="describedby"` para apontar para esse arquivo.
