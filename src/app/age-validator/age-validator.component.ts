import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-validator',
  templateUrl: './age-validator.component.html',
  styleUrls: ['./age-validator.component.css'],
})
export class AgeValidatorComponent implements OnInit {
  age: number;
  heading: string;
  headColor: string;
  element: string;

  constructor() {}

  ngOnInit(): void {
    this.heading = 'Please enter your age';
    this.headColor = 'black';
  }

  setAge(e) {
    console.log(typeof e.target.value);
    this.age = e.target.value;
    //condition?operation on true: operation on false// ternary operator
    // let price = 5; // binary operator
    // let msg = '';
    // msg =
    //   price % 5 == 0 ? 'price is multiple of 5' : 'price is not multiple of 5';
    // this.heading = this.age >= 18 ? 'Valid Age' : 'Invlaid Age';
    this.headColor = this.age >= 18 ? 'green' : 'red';

    // this.element =
    //   this.age >= 18
    //     ? '<h1 style="color:green">Valid Age</h1>'
    //     : '<h1 style="color:red">Invalid Age</h1>';

    // if (this.age >= 18) {
    //   this.heading = 'Valid Age';
    //   this.headColor = 'green';
    // } else {
    //   this.heading = 'Invalid Age';
    //   this.headColor = 'red';
    // }
  }
}
