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

1. Envie este projeto para um repositório GitHub e acesse [vercel.com](https://vercel.com/).
2. No painel do Vercel, escolha **Add New → Project** e importe o repositório.
3. Em **Root Directory**, escolha `apps/store-shell` e confirme essa pasta.
4. Confira as configurações de build:
   - **Framework Preset:** Angular (ou Other, se o Vercel não detectar Angular).
   - **Install Command:** `npm install`.
   - **Build Command:** `npm run build`.
   - **Output Directory:** `dist/store-shell/browser`.
5. Mantenha o arquivo `apps/store-shell/vercel.json`: ele direciona as rotas internas do Angular para `index.html`, permitindo atualizar páginas de produto sem erro 404.
6. Clique em **Deploy**. Ao terminar, abra o endereço fornecido pelo Vercel e teste o catálogo e uma página de produto.
7. Para atualizações futuras, envie as alterações para o repositório conectado. O Vercel fará um novo deploy automaticamente. Um domínio próprio pode ser adicionado em **Settings → Domains**.

Não é necessário configurar backend, proxy, segredo ou variável de ambiente para esse catálogo.
