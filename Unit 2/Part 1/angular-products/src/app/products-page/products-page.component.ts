import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  products: Product[] = [
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
  ];
}
