import { IResponseRest } from '../../../../shared/interfaces/IResponseRest.interface';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { ICharacter } from 'src/app/shared/interfaces/ICharacter.interface';
import { ILocation } from 'src/app/shared/interfaces/ILocation.interface';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { Router } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {

  private actuallyPage: number = 1;
  private lastPage: number = 0;
  private hasNext: boolean = true;
  public characters: Array<ICharacter> = [];

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
    this.requestGetAllCharacters();
  }

  public backToHome(): void {
    this.router.navigateByUrl('home');
  }

  public navigateToDetails(id: number): void {
    this.router.navigateByUrl(`details/${id}`);
  }

  private requestGetAllCharacters(): void {
    this.characterService.getAllCharacters(this.actuallyPage).subscribe((res: any) => {
      this.lastPage = res.info.pages;
      this.characters = this.characters.concat(res.results);
      console.log(this.characters);
      this.updateHasNext();
    });
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
    event.target.complete();
  }

}
