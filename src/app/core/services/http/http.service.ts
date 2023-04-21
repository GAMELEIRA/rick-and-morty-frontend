import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_URL = '';

  constructor(private http: HttpClient) { }

  public get(url: string, params?: any): Observable<any> {
    const completeUrl = `${this.BASE_URL}/${url}`;
    return this.http.get(completeUrl, params);
  }

}
