import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { CanComponentDeactivate } from '../../shared/guards/leave-page.guard';
import { Observable } from 'rxjs';
import { DatePipe, JsonPipe, NgClass } from '@angular/common';
import { ValidationClassesDirective } from '../../shared/directives/validation-classes.directive';
import { MinDateDirective } from '../../shared/directives/min-date.directive';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [
    FormsModule,
    EncodeBase64Directive,
    ValidationClassesDirective,
    MinDateDirective,
    DatePipe,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements CanComponentDeactivate {
  newProduct: Product = {
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
    rating: 1,
  };

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #saved = false; // Product has been saved

  minDate = '2020-01-01';

  canDeactivate() {
    return (
      this.#saved ||
      confirm('¿Quieres abandonar la página?. Los cambios se perderán...')
    );
  }

  addProduct() {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.#saved = true;
        this.#router.navigate(['/products']);
      });
  }
}
