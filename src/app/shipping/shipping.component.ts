import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(
    private cart : CartService
  ) { }
  shippingCosts : any = [];
  ngOnInit(): void {
     this.cart.getShippingPrice().subscribe((data) => {
      this.shippingCosts = data;
    });
  }

}
