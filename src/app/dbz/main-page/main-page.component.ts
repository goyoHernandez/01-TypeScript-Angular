import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  newCharacter: Character = {
    name: 'Bulma',
    power: 10
  }

  constructor() { }
}