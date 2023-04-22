import { CharacterListComponent } from './components/character-list/character-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
