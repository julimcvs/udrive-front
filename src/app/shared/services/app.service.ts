import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../interfaces/user";
import {Observable, of, tap} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AppService {

  constructor(private http: HttpClient,
              private authService: AuthService,
              private router: Router) {
  }

  get loggedUser(): User {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(atob(user)) as User;
    }
    return null as any;
  }

  get loggedUserId(): number {
    const user = localStorage.getItem('user');
    if (user) {
      return (JSON.parse(atob(user)) as User).id;
    }
    return null as any;
  }

  get loggedUserToken(): number {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(atob(token));
    }
    return null as any;
  }

  get isLogged(): boolean {
    return localStorage.getItem('token')
      ? true
      : false;
  }

  login(user: User): Observable<any> {
    return this.authService.authenticate(user).pipe(tap((res => {
      if (!res.jwt) return;
      localStorage.setItem('token', btoa(JSON.stringify(res.jwt)));
      localStorage.setItem('user', btoa(JSON.stringify(user)));
      this.router.navigate([''])
    })))
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  register(user: any) {
    return this.authService.register(user).pipe(tap((res => {
      if (!res.jwt) return;
      localStorage.setItem('token', btoa(JSON.stringify(res.jwt)));
      localStorage.setItem('user', btoa(JSON.stringify(user)));
      this.router.navigate([''])
    })));
  }

}
