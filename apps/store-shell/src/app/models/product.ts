export const PRODUCT_CATEGORIES = ['PORTA', 'MESAS_E_CADEIRAS', 'CRISTALEIRAS', 'CASA_E_JARDIM'] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export interface ProductVariant {
  id: string;
  size: string;
  price: number;
}

export interface Product {
  id: string;
  prodName: string;
  prodType: ProductCategory;
  quantity: number;
  description: string;
  image: string;
  variants: ProductVariant[];
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  PORTA: 'Portas',
  MESAS_E_CADEIRAS: 'Mesas e Cadeiras',
  CRISTALEIRAS: 'Cristaleiras',
  CASA_E_JARDIM: 'Casa e Jardim',
};
