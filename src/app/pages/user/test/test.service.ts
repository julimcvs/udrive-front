import {HttpClient} from '@angular/common/http';
import {GenericService} from '../../../shared/services/generic.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = 'test';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/${this.baseUrl}`;
  }

  test(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
