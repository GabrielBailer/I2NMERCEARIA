import type { Product } from '../models/product';

const illustrativeImages = {
  door: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  table: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80',
};

const pivotanteSizes = [
  { id: '080', size: '0,80 m × 2,20 m', price: 2200 },
  { id: '090', size: '0,90 m × 2,20 m', price: 2400 },
  { id: '100', size: '1,00 m × 2,20 m', price: 2600 },
  { id: '110', size: '1,10 m × 2,20 m', price: 2800 },
  { id: '120', size: '1,20 m × 2,20 m', price: 3000 },
];

export const PRODUCTS: Product[] = [
  {
    id: 'porta-pivotante-bbb',
    prodName: 'Porta Pivotante BBB',
    prodType: 'PORTA',
    quantity: 10,
    description:
      'A Porta Pivotante BBB é produzida em Peroba Rosa de demolição, uma madeira nobre, resistente e marcada pela beleza natural do tempo. Cada porta possui características únicas, como variações de tonalidade, veios, nós e pequenas marcas que fazem parte da história da madeira e tornam cada peça exclusiva. Seu sistema pivotante proporciona um visual moderno e imponente, valorizando a entrada da residência e criando um acabamento de alto padrão.',
    image: illustrativeImages.door,
    variants: pivotanteSizes,
  },
  {
    id: 'porta-pivotante-desenhada',
    prodName: 'Porta Pivotante Desenhada',
    prodType: 'PORTA',
    quantity: 10,
    description:
      'A Porta Pivotante Desenhada combina a beleza da Peroba Rosa de demolição com um desenho exclusivo que valoriza a arquitetura do ambiente. Produzida em madeira maciça e com acabamento artesanal, cada peça apresenta veios, tonalidades e marcas naturais únicas. O sistema pivotante proporciona presença, elegância e um visual contemporâneo. Disponível sob medida.',
    image: illustrativeImages.door,
    variants: pivotanteSizes,
  },
  {
    id: 'porta-pivotante-rustica',
    prodName: 'Porta Pivotante Rústica',
    prodType: 'PORTA',
    quantity: 10,
    description:
      'A Porta Pivotante Rústica é produzida em Peroba Rosa de demolição e valoriza a aparência natural e autêntica da madeira. Seus veios, marcas, nós e variações de tonalidade revelam a história de cada peça, criando uma porta exclusiva e cheia de personalidade. Ideal para projetos que buscam aconchego, rusticidade e sofisticação. Disponível sob medida.',
    image: illustrativeImages.door,
    variants: pivotanteSizes,
  },
  {
    id: 'porta-pivotante-dubai',
    prodName: 'Porta Pivotante Dubai',
    prodType: 'PORTA',
    quantity: 10,
    description:
      'A Porta Pivotante Dubai une o visual sofisticado de um projeto contemporâneo à beleza única da Peroba Rosa de demolição. A madeira maciça e o trabalho artesanal resultam em uma peça imponente, resistente e exclusiva. Seu sistema pivotante valoriza entradas residenciais e comerciais de alto padrão. Disponível sob medida.',
    image: illustrativeImages.door,
    variants: pivotanteSizes,
  },
  {
    id: 'porta-lisa-pivotante',
    prodName: 'Porta Lisa Pivotante',
    prodType: 'PORTA',
    quantity: 10,
    description:
      'A Porta Lisa Pivotante oferece um design limpo, elegante e atemporal, valorizando a beleza natural da Peroba Rosa de demolição. Produzida em madeira maciça, apresenta acabamento artesanal e características únicas em cada peça. O sistema pivotante proporciona praticidade e um visual sofisticado, ideal para projetos modernos e clássicos. Disponível sob medida.',
    image: illustrativeImages.door,
    variants: pivotanteSizes,
  },
  {
    id: 'mesa-de-centro',
    prodName: 'Mesa de Centro',
    prodType: 'MESA',
    quantity: 10,
    description: 'Mesa de centro disponível em diferentes dimensões.',
    image: illustrativeImages.table,
    variants: [
      { id: '090x090', size: '0,90 × 0,90 m', price: 700 },
      { id: '100x100', size: '1,00 × 1,00 m', price: 750 },
      { id: '120x100', size: '1,20 × 1,00 m', price: 800 },
      { id: '150x100', size: '1,50 × 1,00 m', price: 950 },
      { id: '180x100', size: '1,80 × 1,00 m', price: 1100 },
      { id: '200x100', size: '2,00 × 1,00 m', price: 1500 },
    ],
  },
  {
    id: 'mesa-de-jantar',
    prodName: 'Mesa de Jantar',
    prodType: 'MESA',
    quantity: 10,
    description: 'Mesa de jantar disponível em diferentes dimensões e configurações.',
    image: illustrativeImages.table,
    variants: [
      { id: '250x100-6', size: '2,50 × 1,00 m — 6 cadeiras', price: 4000 },
      { id: '300x100-8', size: '3,00 × 1,00 m — 8 cadeiras', price: 6000 },
      { id: '350x100-8', size: '3,50 × 1,00 m — 8 cadeiras', price: 6800 },
      { id: '400x100-10', size: '4,00 × 1,00 m — 10 cadeiras', price: 7800 },
      { id: '450x100-12', size: '4,50 × 1,00 m — 12 cadeiras', price: 8500 },
      { id: '500x100', size: '5,00 × 1,00 m', price: 9500 },
    ],
  },
];
