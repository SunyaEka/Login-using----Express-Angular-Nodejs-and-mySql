import {AuthenticationService} from './../_services/authentication/authentication.service';
import {Injectable, Inject} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
    console.log("Inside Auth Guards");
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(state.url);
    if(this.authService.getToken() != null){
      return true;
    }else {
      if(state.url.includes('/login')) {
       return true;
      }
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
    return false;
  }
}
