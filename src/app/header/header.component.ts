import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {
    console.log('constructor from header loaded..');
  }

  ngOnInit(): void {
    console.log('on init in header');
  }
}
