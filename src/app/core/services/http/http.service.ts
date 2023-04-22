import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/shared/interfaces/ICharacter.interface';
import { ILocation } from 'src/app/shared/interfaces/ILocation.interface';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { IResponseRest } from 'src/app/shared/interfaces/IResponseRest.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public get(url: string, params?: any): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    const completeUrl = `${this.BASE_URL}/${url}`;
    return this.http.get<ICharacter | ILocation | IEpisode | IResponseRest>(completeUrl, {params});
}

}
