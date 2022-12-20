import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private uri = '/character';

  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
};

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.http.get(environment.domain.concat(this.uri), this.httpOptions);
  }

}
