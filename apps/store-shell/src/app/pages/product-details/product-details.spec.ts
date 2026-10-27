import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { ProductDetailsPage } from './product-details';

registerLocaleData(localePt, 'pt-BR');

describe('ProductDetailsPage', () => {
  it('uses a constrained image frame and lists sizes and prices without a dropdown', async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsPage],
      providers: [provideRouter([]), { provide: LOCALE_ID, useValue: 'pt-BR' }],
    }).compileComponents();

    const fixture = TestBed.createComponent(ProductDetailsPage);
    fixture.componentRef.setInput('productId', 'porta-pivotante-bbb');
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;
    const imageFrame = image.parentElement;
    const content = fixture.nativeElement.textContent as string;

    expect(imageFrame?.classList.contains('relative')).toBe(true);
    expect(image.classList.contains('object-cover')).toBe(true);
    expect(fixture.nativeElement.querySelector('select')).toBeNull();
    expect(content).toContain('0,80 m × 2,20 m');
    expect(content.replaceAll('\u00a0', ' ')).toContain('R$ 2.200,00');
  });

  it('shows the product description from the catalog', async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsPage],
      providers: [provideRouter([]), { provide: LOCALE_ID, useValue: 'pt-BR' }],
    }).compileComponents();

    const fixture = TestBed.createComponent(ProductDetailsPage);
    fixture.componentRef.setInput('productId', 'porta-pivotante-bbb');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(
      'A Porta Pivotante BBB é produzida em Peroba Rosa de demolição, uma madeira nobre, resistente e marcada pela beleza natural do tempo.',
    );
  });

  it('links to WhatsApp with the product name in the purchase message', async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsPage],
      providers: [provideRouter([]), { provide: LOCALE_ID, useValue: 'pt-BR' }],
    }).compileComponents();

    const fixture = TestBed.createComponent(ProductDetailsPage);
    fixture.componentRef.setInput('productId', 'porta-pivotante-rustica');
    fixture.detectChanges();

    const purchaseLink = fixture.nativeElement.querySelector(
      'a[href^="https://wa.me/"]',
    ) as HTMLAnchorElement;
    const purchaseUrl = new URL(purchaseLink.href);

    expect(purchaseLink.textContent.trim()).toBe('Comprar pelo WhatsApp');
    expect(purchaseLink.target).toBe('_blank');
    expect(purchaseLink.rel).toContain('noopener');
    expect(purchaseUrl.pathname).toBe('/5511946824780');
    expect(purchaseUrl.searchParams.get('text')).toBe(
      'Olá estou interessado em comprar Porta Pivotante Rústica',
    );
  });
});
