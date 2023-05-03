import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AppService} from "../app.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {
  constructor(
    private appService: AppService,
    private router: Router) {
  }

  canActivate() {
    if (this.appService.isLogged) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
