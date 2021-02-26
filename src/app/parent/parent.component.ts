import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}
  numbers = [1, 2, 3, 4, 5, 7];
  number = 1;
  ngOnInit(): void {}
  incNum() {
    this.number++;
  }
  decNum(e, i) {
    this.number = e;
    this.numbers[i] = e;
  }
  incNumber(e, i) {
    this.number = e;
    this.numbers[i] = e;
  }
}
