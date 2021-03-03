import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthGuardService,
    private route: ActivatedRoute
  ) {}

  credentials = { email: 'user@email.com', password: '1234' };
  email: string = '';
  password: string = '';
  message = 'Enter credentials';
  path = this.route.snapshot.params.path ? this.route.snapshot.params.path : '';
  ngOnInit(): void {}
  login(): void {
    if (this.email.length == 0) {
      this.message = 'Email is required';
      this.auth.setLogged(false);

      return;
    }
    if (this.password.length == 0) {
      this.message = 'Password is required';
      return;
      this.auth.setLogged(false);
    }
    if (
      this.password != this.credentials.password ||
      this.email != this.credentials.email
    ) {
      this.message = 'Invalid credentials. Try again';
      this.auth.setLogged(false);

      return;
    }
    this.auth.setLogged(true);
    this.message = 'Login Success';
    this.path.length == 0
      ? this.router.navigate(['/home'])
      : this.router.navigate(['/' + this.path]);
  }
}
