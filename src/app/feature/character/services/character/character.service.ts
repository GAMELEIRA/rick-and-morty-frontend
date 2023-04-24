import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { IResponseRest } from 'src/app/shared/interfaces/IResponseRest.interface';
import { Character } from 'src/app/shared/models/Character.model';
import { Location } from 'src/app/shared/models/Location.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly RESOURCE = 'character';

  constructor(private httpService: HttpService) { }

  public getAllCharacters(page: number): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { page });
  }

  public getCharacterById(id: string | null): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.get(`${this.RESOURCE}/${id}`);
  }

  public getCharacterByName(name: string): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { name });
  }

  public getCharacterByStatus(status: string): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { status });
  }

  public getCharacterBySpecies(species: string): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { species });
  }

  public getCharacterByType(type: string): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { type });
  }

  public getCharacterByGender(gender: string): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { gender });
  }

  public getLocation(url: string): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.getWithFullURL(url);
  }

  public getOrigin(url: string): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpService.getWithFullURL(url);
  }

}
