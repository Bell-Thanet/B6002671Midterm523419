import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0

  constructor(private productsService: ProductService) { }

  add(p_id: number) {
    this.cartProduct.push(this.productsService.getSomeProduct(p_id));
    // this.sumPrice += this.productsService.getSomeProduct(p_id).p_price
    // this.cont = this.cart.length;

  }
  getCart() {
    return this.cartProduct;
  }
}
