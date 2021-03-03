import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) {}
  userlogged = false;
  setLogged(logged) {
    this.userlogged = logged;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.url[0].path);
    if (!this.userlogged) {
      //do some thing
      alert('You need to login to access this page');
      this._router.navigate(['/login', route.url[0].path]);
      return false;
    }
    return true;
  }
}
