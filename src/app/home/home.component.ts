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
  inputMsg: string;
  inputBoxColor: string;
  constructor() {
    console.log('constructor from home loaded..');
  }
  ngOnInit() {
    let email = 'joh@adsf.com';
    this.email = email;
    this.name = 'John Doe';
    this.age = 34;
    this.inputMsg = 'Current user name';
    this.inputBoxColor = '1px solid red';
  }
  increaseAge() {
    if (this.age <= 49) this.age = this.age + 1;
    else alert('Age cannot be greater than 50');
  }
  decreaseAge() {
    if (this.age >= 21) this.age = this.age - 1;
    else alert('Age cannot be less than 20');
  }
  updateName(e) {
    if (e.target.value.length < 3)
      this.inputMsg = 'Name should be minimum 3 characters';
    else this.inputMsg = 'Updating name...';
  }

  inputFocus() {
    this.inputBoxColor = '1px solid blue !important';
  }
  inputBlur(e) {
    if (e.target.value.length < 3) {
      this.inputMsg = 'Name should be minimum 3 characters';
      return;
    }
    console.log(e.target.value);
    this.inputBoxColor = '1px solid black';
    // backend operation to save is called
    if (e.target.value !== this.name) this.inputMsg = 'Updated user name';
    else this.inputMsg = 'Current user name';
  }
}
