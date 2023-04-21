import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';
import { LocationModule } from './location/location.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterModule,
    EpisodeModule,
    LocationModule
  ]
})
export class FeatureModule {

}
