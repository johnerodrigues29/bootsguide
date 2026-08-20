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

> **Nota editorial:** os reviews, comparações, guias, páginas de categoria e hubs finalizados estão liberados para indexação. Somente `404.html`, Política de Privacidade e Termos permanecem com `noindex,follow`. O sitemap contém as 21 URLs editoriais indexáveis e foi atualizado em 20/08/2026.

## Conteúdo incluído

- Reviews completos: Blundstone 500, 550 e 585.
- Comparações: 500 vs 585 e 550 vs 585.
- Guias: melhores modelos, tamanhos, impermeabilidade, limpeza, caminhada, durabilidade e break-in.
- Diretório multimarcas: Blundstone, Dr. Martens, Timberland, Red Wing e Redback.
- Hubs futuros de Dr. Martens, Timberland, Red Wing e Redback criados com `noindex,follow` até receberem conteúdo completo.
- Páginas de confiança: Sobre, Política Editorial e Divulgação de Afiliados.
- Imagens oficiais de produto convertidas para WebP, com 750 × 500 px, carregamento otimizado e texto alternativo descritivo.

## Manutenção

Os arquivos de estilo e JavaScript são versionados como `style-20260817-r4.css` e `main-20260817-r4.js`; os cabeçalhos Cloudflare permitem cache longo para esses recursos, enquanto o HTML permanece revalidável. Ao alterar CSS ou JS em produção, publique sempre uma nova versão de arquivo e atualize as referências HTML. Para substituir uma publicação anterior, envie o ZIP completo e execute uma purga de cache no Cloudflare se essa opção estiver disponível.

Antes de adicionar links afiliados, substitua somente os botões desativados por URLs aprovadas da Amazon UK e use `rel="sponsored nofollow noopener"`. Não adicione preços, disponibilidade ou alegações de teste que não possam ser verificadas. Os links de compra continuam deliberadamente desativados porque nenhum URL/tag de afiliado foi fornecido neste pacote.
