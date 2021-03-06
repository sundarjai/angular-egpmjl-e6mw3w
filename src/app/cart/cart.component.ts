import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({  
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cart.getItems();

  constructor(
    private cart : CartService
  ) { }

  

}
