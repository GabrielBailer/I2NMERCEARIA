import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ProductDetailsPage } from './pages/product-details/product-details';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Início | I2N Marcenaria' },
  {
    path: 'products/:productId',
    component: ProductDetailsPage,
    title: 'Detalhes do produto | I2N Marcenaria',
  },
  { path: '**', redirectTo: '' },
];
