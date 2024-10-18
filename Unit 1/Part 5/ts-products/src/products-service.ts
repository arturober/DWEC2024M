import { Http } from './http';
import { SERVER } from './constants';
import { Product } from './interfaces/product';
import { ProductsResponse, SingleProductResponse } from './interfaces/responses';

export class ProductsService {
  #http: Http;
  constructor() {
    this.#http = new Http();
  }

  async getProductos() {
    const resp = await this.#http.get<ProductsResponse>(`${SERVER}/products`);
    return resp.products;
  }

  async add(producto: Product) {
    const resp = await this.#http.post<SingleProductResponse, Product>(`${SERVER}/products`, producto);
    return resp.product;
  }

  async update(producto: Product) {
    const resp = await this.#http.put<SingleProductResponse, Product>(`${SERVER}/products/${producto.id}`, producto);
    return resp.product;
  }

  delete(id: number) {
    return this.#http.delete<void>(`${SERVER}/products/${id}`);
  }
}