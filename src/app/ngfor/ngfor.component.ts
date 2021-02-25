import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  // users: any;
  // number: number;
  // table: any;
  numbers: any;
  products: any;
  constructor() {}

  ngOnInit(): void {
    this.numbers = [1, 2, 3, 4, 5, 6, 7];
    this.products = [
      { name: 'mobile', price: 2312 },
      { name: 'tv', price: 3234 },
      { name: 'car', price: 32233 },
    ];
    //   this.number = 9;
    //   this.table = [];
    //   for (let i = 1; i < 11; i++) {
    //     this.table.push(i * this.number);
    //   }
    //   console.log(this.table);
    //   this.users = [
    //     { name: 'johndoe', email: 'hoh@adf.com', phone: 23424234 },
    //     { name: 'alex', email: 'ale@adsf.com', phone: 2344 },
    //     { name: 'tom', email: 'tom@adsf.com', phone: 342342 },
    //     { name: 'jack', email: 'jack@adsf.com', phone: 657567 },
    //   ];
  }
}
