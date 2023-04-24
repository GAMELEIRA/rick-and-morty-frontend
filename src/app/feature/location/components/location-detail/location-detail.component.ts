import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http/http.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent  implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService) { }

  ngOnInit() {
    this.requestGetDetailsOfLocation();
  }

  private getId = () => this.activatedRoute.snapshot.paramMap.get('id');

  private requestGetDetailsOfLocation() {
    this.locationService.getLocationById(this.getId());
  }

}
