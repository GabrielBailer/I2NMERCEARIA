export const CATEGORY_LABELS = {
  PORTA: 'Portas',
  MESA: 'Mesas',
  SOBMEDIDA: 'Móveis sob medida',
} as const;

export type ProductCategory = keyof typeof CATEGORY_LABELS;

export interface Product {
  id: string;
  prodName: string;
  prodType: ProductCategory;
  quantity: number;
  price: number;
}
