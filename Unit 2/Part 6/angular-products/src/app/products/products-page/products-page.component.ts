import { NgClass } from '@angular/common';
import { afterNextRender, Component, computed, DestroyRef, effect, inject, signal, viewChild, viewChildren } from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    ProductItemComponent,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  animations: [
    trigger('animateProduct', [
      state('true', style({ backgroundColor: 'lightgreen' })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('300ms ease-out')),
      transition(':leave',
        animate('300ms ease-out', style({ opacity: 0 }))
      )
    ]),
    trigger('animateList', [
      transition(':increment', [
        query('product-item:enter', [ // Cuidado con el import de query (debe ser @angular/animations)
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(
            100,
            animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
          ),
        ], {optional: true}),
      ]),
    ]),
  ],
})
export class ProductsPageComponent {
  #productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  showImage = signal(true);

  search = signal('');
  searchDebounce = toSignal(
    toObservable(this.search).pipe(
      debounceTime(600), // 600 milisegundos hasta que deja de escribir
      distinctUntilChanged() // Solo si el valor cambia
    ),
    { initialValue: '' }
  );
  #destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      this.#productsService
        .getProducts(this.searchDebounce())
        .pipe(takeUntilDestroyed(this.#destroyRef))
        .subscribe((products) => this.products.set(products));
    });
  }

  toggleImage() {
    this.showImage.update((v) => !v);
  }

  addProduct(product: Product) {
    this.products.update((products) => [...products, product]);
  }

  deleteProduct(product: Product) {
    this.products.update((products) => products.filter((p) => p !== product));
  }
}
