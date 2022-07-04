import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent {
  @Input() test : any;
  @Output() notify = new EventEmitter();

  notifyParent() {
    //this.test.price = 9;
    this.notify.emit();
  }
}
