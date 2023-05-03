import {GenericService} from "./generic.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../interfaces/login";

@Injectable({
  providedIn: "root"
})
export class AuthService extends GenericService {

  constructor(http: HttpClient) {
    super(http, "auth");
  }

  authenticate(user: Login): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }
}
