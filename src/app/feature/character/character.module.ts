import { CharacterListComponent } from './pages/character-list/character-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
