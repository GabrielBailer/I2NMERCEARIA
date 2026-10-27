# I2N Marcenaria — loja virtual

Loja virtual de demonstração com catálogo local e estático, construído a partir da planilha de produtos. O site não depende de API nem de variáveis de ambiente para exibir o catálogo.

## Produtos e opções

O catálogo está em `apps/store-shell/src/app/data/products.ts`. Ele reúne cinco modelos de portas pivotantes, mesas de centro e mesas de jantar. Os cartões mostram o preço inicial; a página de cada produto lista todos os tamanhos e preços, sem dropdown.

Para cadastrar ou alterar produtos, edite esse arquivo:

- `prodName`: nome exibido no catálogo.
- `prodType`: categoria (`PORTA` ou `MESA`).
- `quantity`: quantidade em estoque.
- `variants`: opções disponíveis, cada uma com `id`, `size` e `price`.
- `image`: URL da imagem ilustrativa ou caminho de um arquivo local.

## Executar localmente

Requisitos: Node.js 24 ou superior e npm.

No PowerShell, a partir da pasta do projeto:

```powershell
Set-Location apps\store-shell
npm install
npm start
```

Abra `http://localhost:4200`. Para validar o build e os testes:

```powershell
npm run build
npm test -- --watch=false
```

## Trocar imagens ilustrativas por arquivos locais

1. Copie as imagens para `apps/store-shell/public/images/` (crie as pastas se necessário).
2. No arquivo `apps/store-shell/src/app/data/products.ts`, troque o endereço ilustrativo da propriedade `image` do produto pelo caminho público do arquivo. Por exemplo:

   ```ts
   image: '/images/porta-pivotante-bbb.jpg',
   ```

3. Salve e atualize o navegador. O Angular disponibiliza o conteúdo de `public` na raiz do site; não inclua `public` no endereço da imagem. No Vercel, os arquivos serão publicados junto com o build.

Se preferir reaproveitar uma imagem para vários modelos, altere a URL em `illustrativeImages` no mesmo arquivo. Para usar imagens individuais, defina o caminho diretamente em cada produto.

## Publicar no Vercel

O `vercel.json` na raiz configura os dois frontends como serviços no mesmo projeto:

- `store-shell` (Angular) é publicado em `/`, incluindo as rotas `/products/:productId`.
- `product-details` (Vite/React) é publicado em `/product-details/`.

Para publicar, envie o projeto para um repositório GitHub, importe-o no Vercel e mantenha **Root Directory** na raiz deste repositório. O Vercel usa o `vercel.json` para construir e rotear os dois serviços. Depois do deploy, teste o catálogo, uma rota de produto e `/product-details/`.

As aplicações não chamam uma à outra e não precisam de bindings nem de variáveis de ambiente. O arquivo `apps/store-shell/vercel.json` continua disponível para quem optar por publicar somente o Angular como projeto Vercel separado.
