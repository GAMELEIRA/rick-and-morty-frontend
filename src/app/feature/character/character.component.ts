import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public backToHome(): void {
    this.router.navigateByUrl('home');
  }

}
