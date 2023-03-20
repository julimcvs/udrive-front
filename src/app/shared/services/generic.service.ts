import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {MatTable} from '@angular/material/table';

@Injectable()
export class GenericService {
  public baseUrl;
  public http;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string = '') {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/${baseUrl}`;
  }

  inactive(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  save(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, body);
  }

  searchById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
