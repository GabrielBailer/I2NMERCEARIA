import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../data/products';
import { CATEGORY_LABELS, type Product } from '../../models/product';

@Component({
  selector: 'app-product-details-page',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details.html',
})
export class ProductDetailsPage {
  readonly productId = input.required<string>();
  readonly product = computed(() =>
    PRODUCTS.find((candidate) => candidate.id === this.productId()),
  );
  readonly categoryLabels = CATEGORY_LABELS;

  getWhatsAppUrl(product: Product): string {
    const message = `Olá estou interessado em comprar ${product.prodName}`;
    return `https://wa.me/5511946824780?text=${encodeURIComponent(message)}`;
  }
}
