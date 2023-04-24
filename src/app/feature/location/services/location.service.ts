import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { IResponseRest } from 'src/app/shared/interfaces/IResponseRest.interface';
import { Character } from 'src/app/shared/models/Character.model';
import { Location } from 'src/app/shared/models/Location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly RESOURCE = 'location';

  constructor(private httpSevice: HttpService) { }

  public getAllLocations(page: number): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpSevice.get(this.RESOURCE, page);
  }

  public getLocationById(id: string | null): Observable<Character | Location | IEpisode | IResponseRest> {
    return this.httpSevice.get(this.RESOURCE, {id});
  }

}
