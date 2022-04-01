import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { DbzService } from './services/dbz.services';


@NgModule({
  declarations: [MainPageComponent, CharactersComponent, NewCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [DbzService]
})
export class DbzModule { }