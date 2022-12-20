import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/Response';


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

  public getCharacters(page: number = 1): Observable<Response> {
    return this.http.get<Response>(environment.domain.concat(this.uri).concat(`/?page=${page}`), this.httpOptions);
  }

}
