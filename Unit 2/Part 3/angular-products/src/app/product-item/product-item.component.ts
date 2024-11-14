import { DatePipe, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  output,
} from '@angular/core';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ProductsService } from '../services/products.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [UpperCasePipe, IntlCurrencyPipe, DatePipe, StarRatingComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  showImage = input(true);
  deleted = output<void>();
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #changeDetector = inject(ChangeDetectorRef);

  changeRating(rating: number) {
    const oldRating = this.product().rating;
    this.product().rating = rating;
    this.#productsService
      .changeRating(this.product().id!, rating)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        error: () => {
          this.product().rating = oldRating;
          this.#changeDetector.markForCheck();
        },
      });
  }

  deleteProduct() {
    this.#productsService
      .deleteProduct(this.product().id!)
      .subscribe(() => this.deleted.emit());
  }
}