import { Component } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private auth: AuthGuardService) {
    console.log('constructor from app loaded..');
  }
  logged = this.auth.userlogged;
  title = 'my-app';
}
