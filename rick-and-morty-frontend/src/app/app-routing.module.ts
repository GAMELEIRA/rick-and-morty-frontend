import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'characters',
  loadChildren: () => import('./features/character/character.module').then(m => m.CharacterModule)
}, {
  path: 'episodes',
  loadChildren: () => import('./features/episode/episode.module').then(m => m.EpisodeModule)
}, {
  path: 'locations',
  loadChildren: () => import('./features/location/location.module').then(m => m.LocationModule)
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'characters'
},
{
  path: '**',
  redirectTo: 'characters'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
