import {
  NgClass
} from '@angular/common';
import {
  Component,
  computed,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    ProductItemComponent,
    ProductFormComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent  {
  products =  signal<Product[]>([
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: '/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4,
    },
    {
      id: 3,
      description: 'HDD 1TB Drive',
      available: '2018-03-14',
      price: 56.95,
      imageUrl: '/hdd.jpg',
      rating: 1,
    },
    {
      id: 4,
      description: '16GB DDR4 RAM',
      available: '2020-12-04',
      price: 61,
      imageUrl: '/ram.jpg',
      rating: 3,
    },
  ]);

  showImage = signal(true);

  search = signal('');
  filteredProducts = computed(() => {
    const searchLower = this.search()?.toLocaleLowerCase();
    return searchLower
      ? this.products().filter((prod) =>
          prod.description.toLocaleLowerCase().includes(searchLower)
        )
      : this.products();
  });

  toggleImage() {
    this.showImage.update((v) => !v);
  }

  addProduct(product: Product) {
    product.id = Math.max(...this.products().map((p) => p.id!)) + 1;
    this.products.update(products => [...products, product]);
  }

  deleteProduct(product: Product) {
    this.products.update(products => products.filter((p) => p !== product));
  }
}
