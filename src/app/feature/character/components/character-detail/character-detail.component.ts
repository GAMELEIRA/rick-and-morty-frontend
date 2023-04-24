import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character/character.service';
import { IEpisode } from 'src/app/shared/interfaces/IEpisode.interface';
import { IResponseRest } from 'src/app/shared/interfaces/IResponseRest.interface';
import { Character } from 'src/app/shared/models/Character.model';
import { Origin } from 'src/app/shared/models/Origin.model';
import { Location } from 'src/app/shared/models/Location.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {

  private itemId: string | null = '';
  public character = new Character();
  public location = new Location();
  public origin = new Origin();

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  public ngOnInit() {
    this.getId();
    this.requestGetDetailsOfCharacter();
  }

  public backToListOfCharacter(): void {
    this.router.navigateByUrl('characters');
  }

  private getId(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
  }

  private requestGetDetailsOfCharacter(): void {
    this.characterService.getCharacterById(this.itemId).subscribe((res: Character | Location | IEpisode | IResponseRest) => {
      this.character = res as Character;
      this.requestGetOfLocation();
      this.requestGetOfOrigin();
    });
  }

  private requestGetOfLocation(): void {
    this.characterService.getLocation(this.character.location.url).subscribe((res: any) => {
      this.location = res;
    });
  }

  private requestGetOfOrigin(): void {
    if (this.character.origin.name !== 'unknown') {
      this.characterService.getOrigin(this.character.origin.url).subscribe((res: any) => {
        this.origin = res;
      });
    }
  }

}
