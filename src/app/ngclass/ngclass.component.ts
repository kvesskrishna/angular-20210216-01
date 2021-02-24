import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  textStyle: any;

  constructor() {}

  ngOnInit(): void {
    this.textStyle = {
      'text-danger': false,
      'text-warning': true,
      'text-success': false,
      h2: true,
    };
  }
  changeTextStyle(tclass) {
    for (let key in this.textStyle) {
      this.textStyle[key] = key == tclass ? true : false;
    }
  }
}
