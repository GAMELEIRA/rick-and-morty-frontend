import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { IResponseRest } from 'src/app/shared/interfaces/IResponseRest.interface';
import { Character } from 'src/app/shared/models/Character.model';
import { Location } from 'src/app/shared/models/Location.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getWithFullURL(url: string, params?: any): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.http.get<Character | Location | IEpisode | IResponseRest>(url, { params });
  }

  public get(url: string, params?: any): Observable<Character | Location | IEpisode | IResponseRest> {
    const completeUrl = `${this.BASE_URL}/${url}`;
    return this.http.get<Character | Location | IEpisode | IResponseRest>(completeUrl, { params });
  }

}
