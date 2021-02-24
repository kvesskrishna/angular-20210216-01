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
  constructor() {}

  ngOnInit(): void {
    // this.number = 1;
    // this.range = 10;
    this.generateTable(this.number, this.range);
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
    for (let i = 1; i <= ran; i++) {
      let product = num * i;
      let result = `<li> ${num} X ${i} = ${product} </li>`;
      let result2 = `<br> ${num} X ${i} = ${product}`;
      this.table = this.table + result;
      this.table2 = this.table2 + result2;
    }
  }
}
