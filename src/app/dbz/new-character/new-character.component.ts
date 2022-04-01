import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html'
})
export class NewCharacterComponent {
  constructor(private dbzService: DbzService) { }

  @Input() newCharacter: Character = {
    name: '',
    power: 0
  };

  //Funciona para emitir eventos
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  AddCharacter = () => {
    if (this.newCharacter.name != '' && this.newCharacter.power > 0) {
      // this.onNewCharacter.emit(this.newCharacter);
      this.dbzService.AddCharacter(this.newCharacter);

      this.newCharacter = {
        name: '',
        power: 0
      };
    }
  }
}