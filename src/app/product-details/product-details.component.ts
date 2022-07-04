import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  
  @Output() updatecount = new EventEmitter();

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;

    const productId = Number(routeParam.get('productId'));

    this.product = products.find((item) => item.id === productId);
  }

  addtoCart(product: Product) {
    this.cart.addToCart(product);   
    window.alert('Product Added to cart');
  }
}
