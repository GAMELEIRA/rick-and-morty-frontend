import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationListComponent } from './components/location-list/location-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationComponent } from './location.component';
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [
    LocationComponent,
    LocationDetailComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedModule
  ],
  providers: [
    LocationService
  ]
})
export class LocationModule { }
