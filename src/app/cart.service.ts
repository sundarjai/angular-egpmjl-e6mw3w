import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  getItemsCount() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrice(): Observable<any> {
    return this.http.get<any>('assets/shipping.json');
  }
}
