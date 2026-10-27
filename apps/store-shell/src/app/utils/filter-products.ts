import type { Product, ProductCategory } from '../models/product';

export function filterProducts(
  products: Product[],
  query: string,
  category: ProductCategory | 'TODAS',
): Product[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');

  return products.filter((product) => {
    const matchesCategory = category === 'TODAS' || product.prodType === category;
    const matchesName = product.prodName.toLocaleLowerCase('pt-BR').includes(normalizedQuery);

    return matchesCategory && matchesName;
  });
}
