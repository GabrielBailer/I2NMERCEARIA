import { ProductDetails } from './ProductDetails';

function App() {
  return (
    <main className="min-h-screen bg-white p-6 text-neutral-950 sm:p-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">
          Aplicação independente
        </p>
        <h1 className="mb-6 text-3xl font-bold text-brand-black">
          Microfrontend de detalhes do produto
        </h1>
        <ProductDetails productId="demo-porta" />
      </div>
    </main>
  );
}

export default App;
