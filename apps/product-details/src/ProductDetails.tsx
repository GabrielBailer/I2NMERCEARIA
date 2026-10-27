import { useState } from 'react';
import { CATEGORY_LABELS, type ProductCategory } from './product';
import { DEMO_PRODUCTS } from './demo-products';

type ProductDetailsProps = {
  productId: string;
};

export function ProductDetails({ productId }: ProductDetailsProps) {
  return <ProductDetailsView key={productId} productId={productId} />;
}

function ProductDetailsView({ productId }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const product = DEMO_PRODUCTS.find((candidate) => candidate.id === productId);

  const handleQuantityChange = (value: string, stock: number) => {
    const requestedQuantity = Number(value);
    if (!Number.isInteger(requestedQuantity) || requestedQuantity < 1) {
      setQuantity(1);
      return;
    }

    setQuantity(Math.min(requestedQuantity, stock));
  };

  const handlePurchase = () => {
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > product.quantity) {
      setPurchaseMessage('Informe uma quantidade válida, dentro do estoque disponível.');
      return;
    }

    setPurchaseMessage(
      'Demonstração: o servidor ainda não oferece carrinho ou endpoint de compra. Nenhuma compra foi realizada.',
    );
  };

  if (!product) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-950" role="alert">
        <h2 className="font-semibold">Não foi possível abrir este produto.</h2>
        <p className="mt-2">O produto demonstrativo solicitado não está cadastrado.</p>
        <a
          className="mt-4 inline-flex rounded-md border border-red-800 px-4 py-2 font-semibold hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
          href="/"
        >
          Voltar ao catálogo
        </a>
      </div>
    );
  }

  const imageUrl = getCategoryImage(product.prodType);

  return (
    <section aria-labelledby="product-details-title">
      <a className="mb-5 inline-flex text-sm font-semibold text-brand-black underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-brand-orange" href="/">
        Voltar ao catálogo
      </a>
      <p className="mb-4 rounded-lg bg-brand-stone px-4 py-3 text-sm text-neutral-700">
        Produto local demonstrativo.
      </p>
      <div className="grid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm md:grid-cols-2">
        <div className="relative aspect-[4/3] min-h-72 bg-brand-stone sm:min-h-96 md:aspect-auto md:min-h-[32rem]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={imageUrl}
            alt={`Imagem ilustrativa da categoria ${CATEGORY_LABELS[product.prodType]}`}
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-700">
            Imagem ilustrativa da categoria
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">
            {CATEGORY_LABELS[product.prodType]}
          </p>
          <h2 id="product-details-title" className="mt-2 text-2xl font-bold text-brand-black sm:text-3xl">
            {product.prodName}
          </h2>
          <p className="mt-5 text-3xl font-bold text-brand-black">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            {product.quantity > 0
              ? `${product.quantity} unidades disponíveis`
              : 'Produto indisponível no momento'}
          </p>
          <div className="my-6 border-t border-neutral-200" />
          <p className="leading-relaxed text-neutral-700">
            {getDemoDescription(product.prodType)}
          </p>
          <label className="mt-7 block max-w-36">
            <span className="mb-2 block text-sm font-semibold text-neutral-800">Quantidade</span>
            <input
              className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black/20 disabled:bg-neutral-100"
              type="number"
              min={1}
              max={product.quantity}
              step={1}
              value={quantity}
              disabled={product.quantity < 1}
              onChange={(event) => handleQuantityChange(event.currentTarget.value, product.quantity)}
              aria-describedby="quantity-stock"
            />
          </label>
          <p id="quantity-stock" className="mt-2 text-sm text-neutral-600">
            Estoque disponível: {product.quantity}
          </p>
          <button
            className="mt-6 w-full rounded-md bg-brand-orange px-5 py-3 font-semibold text-neutral-950 transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-white"
            type="button"
            disabled={product.quantity < 1}
            onClick={handlePurchase}
          >
            Demonstrar intenção de compra
          </button>
          {purchaseMessage && (
            <p className="mt-4 rounded-md bg-brand-stone p-3 text-sm text-neutral-800" role="status">
              {purchaseMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function getCategoryImage(category: ProductCategory): string {
  const images: Record<ProductCategory, string> = {
    PORTA:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    MESA:
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85',
    SOBMEDIDA:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  };

  return images[category];
}

function getDemoDescription(category: ProductCategory): string {
  const descriptions: Record<ProductCategory, string> = {
    PORTA:
      'Uma peça de demonstração para valorizar a entrada e compor ambientes com acabamento acolhedor.',
    MESA:
      'Uma peça demonstrativa para compor salas de jantar e espaços de convivência.',
    SOBMEDIDA:
      'Um exemplo demonstrativo de solução planejada para aproveitar melhor cada ambiente.',
  };

  return descriptions[category];
}
