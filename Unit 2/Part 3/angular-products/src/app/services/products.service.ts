import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponse, SingleProductResponse } from '../interfaces/responses';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #productsUrl = 'products';
  #http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.#http
      .get<ProductsResponse>(this.#productsUrl)
      .pipe(map((resp) => resp.products));
  }

  insertProduct(product: Product): Observable<Product> {
    return this.#http
      .post<SingleProductResponse>(this.#productsUrl, product)
      .pipe(map((resp) => resp.product));
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.#http.put<void>(`${this.#productsUrl}/${idProduct}/rating`, {
      rating: rating,
    });
  }

  deleteProduct(id: number): Observable<void> {
    return this.#http.delete<void>(`${this.#productsUrl}/${id}`);
  }
}
