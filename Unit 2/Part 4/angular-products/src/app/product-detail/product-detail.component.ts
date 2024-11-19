import {
  Component,
  effect,
  inject,
  input,
  numberAttribute
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  #productsService = inject(ProductsService);
  #title = inject(Title);

  id = input.required({ transform: numberAttribute });

  product = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) => this.#productsService.getProduct(id))
    )
  );

  constructor() {
    effect(() => {
      if(this.product()) {
        this.#title.setTitle(this.product()!.description + ' | Angular Products')
      }
    });
  }
}
