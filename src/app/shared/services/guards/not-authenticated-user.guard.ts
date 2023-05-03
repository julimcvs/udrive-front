import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AppService} from "../app.service";

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedUserGuard implements CanActivate {
  constructor(
    private appService: AppService,
    private router: Router) {
  }

  canActivate() {
    if (this.appService.isLogged) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
