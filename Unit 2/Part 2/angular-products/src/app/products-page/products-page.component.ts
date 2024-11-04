import { NgClass } from '@angular/common';
import {  ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [NgClass, FormsModule],
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

  showImage = signal(true);

  newProduct: Product = {
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
    rating: 1
  };

  #changeDetector = inject(ChangeDetectorRef);

  toggleImage() {
    this.showImage.update(v => !v);
  }

  addProduct(formProduct: NgForm) {
    this.products.push({...this.newProduct});
    formProduct.resetForm();
    this.newProduct.imageUrl = '';
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck(); // Mark the component as dirty manually
    });
  }
}
