import { createNgModule } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-table',
  templateUrl: './maths-table.component.html',
  styleUrls: ['./maths-table.component.css'],
})
export class MathsTableComponent implements OnInit {
  number: number;
  range: number;
  table: any;
  table2: string;
  option1: string;
  showList: boolean;
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.option1 = 'list';
    this.showList = true;
    this.options = {
      list: false,
      div: false,
      color: false,
    };
    // let nums = ['a' => 1, 'b' => 2, (c) => 34];
    // console.log(this.options['color']);
    // this.number = 1;
    // this.range = 10;
    this.generateTable(1, 10);
    this.changeView('list');
    // this.table = `${this.number} X ${this.range} = ${this.number * this.range}`;

    // this.table =
    //   this.table +
    //   `${this.number} X ${i} = ${this.number * i}\
    // `;
    //  let result = this.number * i;
    //  this.table = this.table + '\n' + this.number + 'X' + i + '=' + result;
  }
  generateTable(num = this.number, ran = this.range) {
    this.table = '';
    this.table2 = '';
    for (let i = 1; i <= ran; i++) {
      let product = num * i;
      let result = `<li> ${num} X ${i} = ${product} </li>`;
      let result2 = `<br> ${num} X ${i} = ${product}`;
      this.table = this.table + result;
      this.table2 = this.table2 + result2;
    }
  }
  changeView(e) {
    // this.showList = !this.showList;
    let option = typeof e == 'string' ? e : e.target.value;
    // this.options.option
    // this.options.forEach((option) => {
    //   option = false;
    // });

    for (let key in this.options) {
      // if (key == option) {
      //   this.options[key] = true;
      // } else {
      //   this.options[key] = false;
      // }
      this.options[key] = key == option ? true : false;
    }
    console.log(this.options);
    // this.options[option] = true;
  }
}
