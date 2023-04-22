import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { ICharacter } from 'src/app/shared/interfaces/ICharacter.interface';
import { Router } from '@angular/router';
import { PoPageFilter } from '@po-ui/ng-components';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {

  private actuallyPage: number = 1;
  private lastPage: number = 0;
  private hasNext: boolean = false;
  public characters: Array<ICharacter> = [];

  public readonly filter: PoPageFilter = {
    placeholder: 'Nome, Status, Especie, Tipo, Sexo',
    action: this.requestGetCharactersBySearch.bind(this),
    advancedAction: this.requestGetCharactersBySearch.bind(this)
  };

  constructor(private characterService: CharacterService, private router: Router) { }

  public ngOnInit(): void {
    this.requestGetAllCharacters();
  }

  public backToHome(): void {
    this.router.navigateByUrl('home');
  }

  public navigateToDetails(id: number): void {
    this.router.navigateByUrl(`details/${id}`);
  }

  public refreshPage(event?: any): void {
    this.cleanPage();
    this.requestGetAllCharacters(event);
  }

  public requestGetCharactersBySearch(search: string): void {
    if (this.searchIsFill(search)) {
      this.characterService.getCharacterByName(search).subscribe((res: any) => {
        this.updateListBySearch(res);
      });
      this.characterService.getCharacterByStatus(search).subscribe((res: any) => {
        this.updateListBySearch(res);
      });
      this.characterService.getCharacterBySpecies(search).subscribe((res: any) => {
        this.updateListBySearch(res);
      });
      this.characterService.getCharacterByType(search).subscribe((res: any) => {
        this.updateListBySearch(res);
      });
      this.characterService.getCharacterByGender(search).subscribe((res: any) => {
        this.updateListBySearch(res);
      });
    } else {
      this.requestGetAllCharacters();
    }
  }

  private updateListBySearch(response: any) {
    this.characters = this.characters.concat(response.results);
  }

  private cleanPage(): void {
    this.characters = [];
    this.hasNext = false;
    this.actuallyPage = 1;
  }

  private searchIsFill(search: string): boolean {
    if (search.trim().length <= 0) {
      this.cleanPage();
      return false;
    } else {
      this.cleanPage();
      return true;
    }
  }

  private requestGetAllCharacters(event?: any): void {
    this.characterService.getAllCharacters(this.actuallyPage).subscribe((res: any) => {
      this.lastPage = res.info.pages;
      this.characters = this.characters.concat(res.results);
      this.updateHasNext();
      this.closedEvent(event);
    });
  }

  private closedEvent(event?: any | undefined): void {
    if (event) {
      event.target.complete();
    }
  }

  private updateHasNext(): void {
    this.hasNext = this.actuallyPage < this.lastPage;
    if (this.hasNext) {
      this.updateNumberPage();
    }
  }

  private updateNumberPage(): void {
    this.actuallyPage++;
  }

  public onIonInfinite(event: any): void {
    if (this.hasNext) {
      this.requestGetAllCharacters();
    }
    this.closedEvent(event);
  }

}
