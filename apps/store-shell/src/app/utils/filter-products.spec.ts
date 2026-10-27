import { describe, expect, it } from 'vitest';
import { PRODUCTS } from '../data/products';
import { filterProducts } from './filter-products';

describe('filterProducts', () => {
  it('filters product names without regard to case or surrounding whitespace', () => {
    expect(filterProducts(PRODUCTS, '  PORTA ', 'TODAS').map((product) => product.id))
      .toContain('porta-pivotante-bbb');
  });

  it('combines category and name filters', () => {
    expect(filterProducts(PRODUCTS, 'jantar', 'MESA').map((product) => product.id))
      .toEqual(['mesa-de-jantar']);
    expect(filterProducts(PRODUCTS, 'jantar', 'PORTA')).toEqual([]);
  });
});
