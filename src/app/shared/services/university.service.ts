import {GenericService} from "./generic.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UniversityService extends GenericService {

  constructor(http: HttpClient) {
    super(http, "university");
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
