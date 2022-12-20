import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterService } from './character.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterViewComponent } from './character-view/character-view.component';

@NgModule({
  declarations: [
    CharacterViewComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    InfiniteScrollModule
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
