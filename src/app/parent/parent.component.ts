import { Component, OnInit } from '@angular/core';
import { NameService } from './../services/name.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private nameservice: NameService) {}
  numbers = [1, 2, 3, 4, 5, 7];
  number = 1;
  ngOnInit(): void {
    let name = this.nameservice.name;
    console.log(name);
    this.nameservice.setName('alex');
  }
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
