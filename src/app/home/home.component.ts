import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // external template
  // template: `<h1>Home component</h1>`, // inline template
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  constructor() {
    console.log('constructor from home loaded..');
  }
  ngOnInit() {
    let email = 'joh@adsf.com';
    this.email = email;
    this.name = 'John Doe';
    this.age = 34;
  }
  increaseAge() {
    this.age = this.age + 1;
  }
  decreaseAge() {
    this.age = this.age - 1;
  }
}
