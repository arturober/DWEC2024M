import { Http } from './http.js';
import { SERVER } from './constants.js';
import { Product } from './interfaces/product.js';
import { ProductsResponse } from './interfaces/responses.js';

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
    const resp = await this.#http.post(`${SERVER}/products`, producto);
    return resp.product;
  }

  async update(producto) {
    const resp = await this.#http.put(`${SERVER}/products/${producto.id}`, product);
    return resp.product;
  }

  delete(id) {
    return this.#http.delete(`${SERVER}/products/${id}`);
  }
}