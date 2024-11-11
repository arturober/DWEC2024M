import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  newProduct: Product = {
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
    rating: 1,
  };

  added = output<Product>();

  addProduct(formProduct: NgForm) {
    const newProduct = { ...this.newProduct };
    this.added.emit(newProduct);
    formProduct.resetForm();
    this.newProduct.imageUrl = '';
  }
}
