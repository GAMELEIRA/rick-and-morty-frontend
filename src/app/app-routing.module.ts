import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  }, {
    path: 'characters',
    loadChildren: () => import('./feature/character/character.module').then((m) => m.CharacterModule),
  }, {
    path: 'episodies',
    loadChildren: () => import('./feature/episode/episode.module').then((m) => m.EpisodeModule),
  }, {
    path: 'locations',
    loadChildren: () => import('./feature/location/location.module').then((m) => m.LocationModule),
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
