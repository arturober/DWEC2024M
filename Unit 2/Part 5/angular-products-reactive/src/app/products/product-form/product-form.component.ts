import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { CanComponentDeactivate } from '../../shared/guards/leave-page.guard';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [ReactiveFormsModule, EncodeBase64Directive],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements CanComponentDeactivate {
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #saved = false; // Product has been saved

  #fb = inject(NonNullableFormBuilder);

  productForm = this.#fb.group({
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
  });
  imageBase64 = '';

  canDeactivate() {
    return (
      this.#saved ||
      confirm('¿Quieres abandonar la página?. Los cambios se perderán...')
    );
  }

  addProduct() {
    this.#productsService
      .insertProduct({
        ...this.productForm.getRawValue(),
        rating: 1,
        imageUrl: this.imageBase64,
      })
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.#saved = true;
        this.#router.navigate(['/products']);
      });
  }
}
