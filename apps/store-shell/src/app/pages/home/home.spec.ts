import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { HomePage } from './home';

registerLocaleData(localePt, 'pt-BR');

describe('HomePage', () => {
  it('shows the starting price without a size selector on product cards', async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const firstCard = fixture.nativeElement.querySelector('article') as HTMLElement;

    expect(firstCard.querySelector('select')).toBeNull();
    expect(firstCard.textContent?.replaceAll('\u00a0', ' ')).toContain('A partir de R$ 2.200,00');
  });
});
