import { Character } from './../../../models/Character';
import { CharacterService } from './../character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent {

  public characters: Array<Character> = [];
  public actuallyPage: number = 1;
  public finalPage!: number;

  constructor(private characterService: CharacterService) {
    this.requestGetCharacter(1);
  }

  private requestGetCharacter = (page: number) => {
    this.characterService.getCharacters(this.actuallyPage).subscribe((res) => {
      this.characters = this.characters.concat(res.results);
      this.finalPage = res.info.pages;
    });
  }

  private validateMorePage = () => this.actuallyPage < this.finalPage;

  private getNextPage = () => {
    const havePage = this.validateMorePage();
    if (havePage) {
      return this.actuallyPage++;
    } else {
      return this.actuallyPage;
    }
  }

  public onScroll = () => {
    if (this.validateMorePage()) {
      this.requestGetCharacter(this.getNextPage());
    }
  }

}
