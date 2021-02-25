import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  text: string;
  price: number = 5000;
  user: any = { name: 'adfadf', email: 'adsf@adf.cin', phone: 234234 };
  constructor() {}

  ngOnInit(): void {
    this.text = 'This is a sample Text';
  }
}
