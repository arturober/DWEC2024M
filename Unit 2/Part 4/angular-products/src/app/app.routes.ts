import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsPageComponent,
    title: 'Products Page | Angular Products',
  },
  {
    path: 'products/add',
    component: ProductFormComponent,
    title: 'New Product | Angular Products',
  },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  // Aquí podríamos cargar un página de error 404 por ejemplo
  { path: '**', redirectTo: '/products' },
];
