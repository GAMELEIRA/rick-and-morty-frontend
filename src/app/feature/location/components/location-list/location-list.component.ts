import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';
import { Location } from 'src/app/shared/models/Location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent  implements OnInit {

  private pageActually: number = 1;
  public locations: Array<Location> = [];

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit() {
    this.requestGetAllLocations();
  }

  private requestGetAllLocations(): void {
    this.locationService.getAllLocations(this.pageActually).subscribe((res: any) => {
      this.locations = res.results;
    });
  }

  public goToDetails(id: number): void {
    this.router.navigateByUrl(`locations/details/${id}`);
  }

}
