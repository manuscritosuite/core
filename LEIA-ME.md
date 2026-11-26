# Site Manuscrito — pacote de hospedagem (versão 4)

Site estático (HTML, CSS e JavaScript simples). Sem servidor, sem banco de dados.

## O que mudou nesta versão
- **Valores:** módulos a R$ 49,90 e Suite a R$ 99,90 (pagamento único via Pix, licença para 1 computador). Nova página "Como adquirir" com cartões, itens incluídos, passo a passo e perguntas frequentes. Valor também no topo de cada página de produto e numa faixa na página inicial.
- **Logos em SVG** vetorizados dos arquivos enviados (`assets/icons/`), usados em todo o site.
- **SEO:** títulos e descrições por página, um H1 por página com H2 de palavras-chave, dados estruturados (JSON-LD), URLs canônicas, imagem de compartilhamento, `sitemap.xml` e `robots.txt`.
- **Termos:** licença para 1 computador; atualizações da versão 2.0 a definir.
- **Suporte:** seção em Contato (e-mail com modelo de mensagem). Política de Privacidade atualizada.

## Publicar no GitHub (substituir a versão atual)
1. Extraia o zip.
2. No repositório `manuscrito`, use **Add file > Upload files** e arraste **todo o conteúdo** da pasta (não a pasta em si). Confirme em **Commit changes**.
3. Aguarde alguns minutos e confira o site. Para remover arquivos antigos que não existem mais, apague-os pelo GitHub.

## Preços
Os valores aparecem em vários arquivos. Para mudar, procure (Ctrl+F em todos os arquivos) "49,90", "99,90", "149,70" e "49,80" e altere junto. Os dados estruturados (`"price"`) usam o formato `49.90` e `99.90`.

## Google (SEO): o que você precisa fazer
1. Acesse search.google.com/search-console, escolha **Prefixo do URL** e informe `https://gabrielluzinacio-alt.github.io/manuscrito/`.
2. Verifique a propriedade pela **tag HTML**: cole a tag no `<head>` do `index.html` (ou me envie que eu coloco) e publique.
3. Em **Sitemaps**, envie `sitemap.xml`. Em **Inspeção de URL**, solicite a indexação da página inicial.
4. A indexação leva de dias a semanas. Ranquear depende também de concorrência e de outros sites apontando para o seu (links).

## Quando tiver domínio próprio
Troque `https://gabrielluzinacio-alt.github.io/manuscrito/` pelo novo endereço em **todos** os arquivos (busca e substituição), incluindo `sitemap.xml` e `robots.txt`. Depois configure o domínio em Settings > Pages e cadastre o novo endereço no Search Console.

## Formulário
`assets/js/config.js` guarda os links do Google Forms. O campo `entrySoftware` ainda precisa do número do campo do formulário para a pré-seleção do software.

## Pendências conhecidas
- Tela do Literário no editor na aparência Clara; telas do Digital em escuro e sépia (sem o livro "Verity"); prints do Acadêmico com texto limpo.
- `entrySoftware` (pré-seleção no Forms).
- Revisão jurídica da Política de Privacidade e dos Termos; consulta a contador sobre CNPJ e nota fiscal.
- Requisitos do Windows e versão atual dos programas.
