import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationComponent } from './location.component';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent
  }, {
    path: 'locations/details/:id',
    component: LocationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
