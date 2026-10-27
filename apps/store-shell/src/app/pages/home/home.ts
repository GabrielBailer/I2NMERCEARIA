import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../data/products';
import {
  CATEGORY_LABELS,
  PRODUCT_CATEGORIES,
  type Product,
  type ProductCategory,
} from '../../models/product';
import { filterProducts } from '../../utils/filter-products';

@Component({
  selector: 'app-home-page',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  readonly products = PRODUCTS;
  readonly searchQuery = signal('');
  readonly selectedCategory = signal<ProductCategory | 'TODAS'>('TODAS');
  readonly categories = PRODUCT_CATEGORIES;
  readonly categoryLabels = CATEGORY_LABELS;
  readonly filteredProducts = computed(() =>
    filterProducts(this.products, this.searchQuery(), this.selectedCategory()),
  );

  onSearch(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchQuery.set(event.target.value);
    }
  }

  selectCategory(category: ProductCategory | 'TODAS'): void {
    this.selectedCategory.set(category);
  }

  startingPrice(product: Product): number {
    const variant = product.variants[0];
    if (!variant) {
      throw new Error(`O produto ${product.id} não possui opções de tamanho e preço.`);
    }

    return variant.price;
  }
}
