import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
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

  #changeDetector = inject(ChangeDetectorRef);

  addProduct(formProduct: NgForm) {
    const newProduct = { ...this.newProduct };
    this.added.emit(newProduct);
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
