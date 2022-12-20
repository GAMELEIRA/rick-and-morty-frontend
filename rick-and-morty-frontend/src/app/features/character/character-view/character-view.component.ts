import { CharacterService } from './../character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent {

  public characters!: Array<any>;

  constructor(private characterService: CharacterService) {
    this.requestGetCharacter();
  }

  private requestGetCharacter = () => {
    this.characterService.getCharacters().subscribe((res) => {
      this.characters = res.results;
    });
  }

}
