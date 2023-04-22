import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character/character.service';
import { ICharacter } from 'src/app/shared/interfaces/ICharacter.interface';
import { ILocation } from 'src/app/shared/interfaces/ILocation.interface';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { IResponseRest } from 'src/app/shared/interfaces/IResponseRest.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {

  private itemId: string | null = '';
  public character: ICharacter = {
    id: 0,
    name: '',
    url: '',
    created: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: ''
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: []
  }

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  public ngOnInit() {
    this.getId();
    this.getDetailsOfCharacter();
  }

  public backToListOfCharacter(): void {
    this.router.navigateByUrl('characters');
  }

  private getId(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
  }

  private getDetailsOfCharacter(): void {
    this.characterService.getCharacterById(this.itemId).subscribe((res: ICharacter | ILocation | IEpisode | IResponseRest) => {
      this.character = res as ICharacter;
    });
  }

}
