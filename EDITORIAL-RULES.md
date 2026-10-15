# BootsGuide — regras para os próximos artigos

Usar sempre a versão mais recente deste pacote como base.

- Todo comparativo termina com a seção `More comparisons`, após FAQ/fontes, dentro de `.article-content`, com dois cards de comparativos existentes e relevantes.
- Todo review termina com a seção `Related guides`, no mesmo padrão dos reviews existentes, com dois cards editoriais relevantes. Não inventar URLs nem usar guia específico de outra marca como se se aplicasse ao modelo analisado.
- Na página `/reviews/`, o modelo novo ocupa o único card principal `.index-feature`. O destaque anterior passa para os cards menores. Cada review aparece uma única vez, sem duplicar o novo destaque na grade.
- Cards editoriais devem ser clicáveis por inteiro, com foco de teclado visível e link principal acessível.
- Conferir imagens reais antes de integrar. Preservar proporção e exibir toda a bota com `object-fit: contain`; não usar `cover` para produtos. Para a 2976, usar o arquivo local completo e a classe `boot-2976-frame` nos contêineres de foto. Aplicar a mesma imagem correta em home, Reviews, hub da marca, review, bloco Amazon e metadados.
- Preservar links e tags afiliadas, aviso de comissão, botões Amazon, atalho móvel e comportamento dos scripts existentes. Não escrever `AFFILIATE LINKS` nos blocos ou botão móvel.
- Usar Article + BreadcrumbList + FAQPage coerentes com o conteúdo visível; não adicionar Product incompleto. Não alegar teste prático inexistente.
- Conferir links internos, imagens locais, âncoras, schema, destaque sem duplicação e seções finais antes de empacotar. Preparado não significa publicado.

## Imagens de comparativos — padrão obrigatório

- Toda capa e card de comparativo usa o componente `.boot-pair` com as duas fotos reais dos modelos lado a lado, na mesma ordem do título/URL, com número e cor abaixo. Referência: 1609 vs 550.
- Aplicar também em More comparisons, Related guides, home, hubs e páginas de listagem. Nunca representar um comparativo por uma bota isolada nem reutilizar uma montagem antiga de estilo diferente.
- Reutilizar `/assets/css/boot-pair-20261014-r3.css`, `.boot-pair-item` e `.boot-pair-photo`; imagens inteiras com `object-fit: contain`, sem corte ou distorção. A classe `.boot-pair-photo` separa a altura da foto da legenda.
- Fotos individuais dentro de seções sobre um único modelo e dos blocos de compra continuam individuais.
