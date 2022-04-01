import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
    constructor() { }

    private _characters: Character[] = [
        {
            name: 'Yamcha',
            power: 10000
        },
        {
            name: 'Mister Satan',
            power: 500
        }
    ];

    get characters(): Character[] {
        return [...this._characters];
    }

    AddCharacter = (character: Character) => {
        this._characters.push(character);
    }
}