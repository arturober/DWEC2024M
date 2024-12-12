import { DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { MinDateDirective } from '../../shared/directives/min-date.directive';
import { ValidationClassesDirective } from '../../shared/directives/validation-classes.directive';
import { CanComponentDeactivate } from '../../shared/guards/leave-page.guard';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../../shared/modals/confirm-modal/confirm-modal.component';

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
  #modalService = inject(NgbModal);

  #saved = false; // Product has been saved

  minDate = '2020-01-01';
  days = ['Mo','Tu','We','Th','Fr','Sa','Su']
  daysOpen = new Array(7).fill(true);

  addForm = viewChild.required<NgForm>('addForm');

  canDeactivate() {
    if (this.#saved || this.addForm().pristine) {
      return true;
    }
    const modalRef = this.#modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Changes not saved';
    modalRef.componentInstance.body = 'Do you want to leave the page?';
    return modalRef.result.catch(() => false);
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
