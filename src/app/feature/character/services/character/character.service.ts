import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ICharacter } from 'src/app/shared/interfaces/ICharacter.interface';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { ILocation } from 'src/app/shared/interfaces/ILocation.interface';
import { IResponseRest } from 'src/app/shared/interfaces/IResponseRest.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly RESOURCE = 'character';

  constructor(private httpService: HttpService) { }

  public getAllCharacters(page: number): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { page });
  }

  public getCharacterById(id: string | null): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    return this.httpService.get(`${this.RESOURCE}/${id}`);
  }

  public getCharacterByName(name: string): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { name });
  }

  public getCharacterByStatus(status: string): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { status });
  }

  public getCharacterBySpecies(species: string): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { species });
  }

  public getCharacterByType(type: string): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { type });
  }

  public getCharacterByGender(gender: string): Observable<ICharacter | ILocation | IEpisode | IResponseRest> {
    return this.httpService.get(this.RESOURCE, { gender });
  }

}
