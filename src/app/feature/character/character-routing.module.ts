import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent,
  }, {
    path: 'characters/details/:id',
    component: CharacterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
