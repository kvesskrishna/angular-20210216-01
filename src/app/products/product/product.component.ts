import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  @Input() product;
  @Output() changeQuant = new EventEmitter();
  ngOnInit(): void {
    console.log(this.product);
  }
  setQuantity(action, id) {
    // console.log(action, id);
    let data = { action: action, id: id };
    this.changeQuant.emit(data);
  }
}
