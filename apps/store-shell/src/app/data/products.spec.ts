import { describe, expect, it } from 'vitest';
import { PRODUCTS } from './products';

describe('local product catalog', () => {
  it('uses the spreadsheet descriptions for every door model', () => {
    const descriptionsByName = new Map(
      PRODUCTS.filter((product) => product.prodType === 'PORTA').map((product) => [
        product.prodName,
        product.description,
      ]),
    );

    expect(descriptionsByName).toEqual(
      new Map([
        [
          'Porta Pivotante BBB',
          'A Porta Pivotante BBB é produzida em Peroba Rosa de demolição, uma madeira nobre, resistente e marcada pela beleza natural do tempo. Cada porta possui características únicas, como variações de tonalidade, veios, nós e pequenas marcas que fazem parte da história da madeira e tornam cada peça exclusiva. Seu sistema pivotante proporciona um visual moderno e imponente, valorizando a entrada da residência e criando um acabamento de alto padrão.',
        ],
        [
          'Porta Pivotante Desenhada',
          'A Porta Pivotante Desenhada combina a beleza da Peroba Rosa de demolição com um desenho exclusivo que valoriza a arquitetura do ambiente. Produzida em madeira maciça e com acabamento artesanal, cada peça apresenta veios, tonalidades e marcas naturais únicas. O sistema pivotante proporciona presença, elegância e um visual contemporâneo. Disponível sob medida.',
        ],
        [
          'Porta Pivotante Rústica',
          'A Porta Pivotante Rústica é produzida em Peroba Rosa de demolição e valoriza a aparência natural e autêntica da madeira. Seus veios, marcas, nós e variações de tonalidade revelam a história de cada peça, criando uma porta exclusiva e cheia de personalidade. Ideal para projetos que buscam aconchego, rusticidade e sofisticação. Disponível sob medida.',
        ],
        [
          'Porta Pivotante Dubai',
          'A Porta Pivotante Dubai une o visual sofisticado de um projeto contemporâneo à beleza única da Peroba Rosa de demolição. A madeira maciça e o trabalho artesanal resultam em uma peça imponente, resistente e exclusiva. Seu sistema pivotante valoriza entradas residenciais e comerciais de alto padrão. Disponível sob medida.',
        ],
        [
          'Porta Lisa Pivotante',
          'A Porta Lisa Pivotante oferece um design limpo, elegante e atemporal, valorizando a beleza natural da Peroba Rosa de demolição. Produzida em madeira maciça, apresenta acabamento artesanal e características únicas em cada peça. O sistema pivotante proporciona praticidade e um visual sofisticado, ideal para projetos modernos e clássicos. Disponível sob medida.',
        ],
      ]),
    );
  });

  it('registers every door model with the spreadsheet size and price options', () => {
    const doors = PRODUCTS.filter((product) => product.prodType === 'PORTA');
    const expectedSizes = [
      '0,80 m × 2,20 m',
      '0,90 m × 2,20 m',
      '1,00 m × 2,20 m',
      '1,10 m × 2,20 m',
      '1,20 m × 2,20 m',
    ];
    const expectedPrices = [2200, 2400, 2600, 2800, 3000];

    expect(doors).toHaveLength(5);
    for (const door of doors) {
      expect(door.variants.map((variant) => variant.size)).toEqual(expectedSizes);
      expect(door.variants.map((variant) => variant.price)).toEqual(expectedPrices);
    }
  });

  it('registers the center and dining table dimensions with their corresponding prices', () => {
    const centerTable = PRODUCTS.find((product) => product.id === 'mesa-de-centro');
    const diningTable = PRODUCTS.find((product) => product.id === 'mesa-de-jantar');

    expect(centerTable?.variants.map((variant) => variant.price)).toEqual([
      700, 750, 800, 950, 1100, 1500,
    ]);
    expect(diningTable?.variants.map((variant) => variant.price)).toEqual([
      4000, 6000, 6800, 7800, 8500, 9500,
    ]);
    expect(diningTable?.variants[0]?.size).toContain('6 cadeiras');
  });
});
