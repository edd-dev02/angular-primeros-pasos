import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void {

    /*
    const newCharacter: Character = {
      id:uuid(),
      name: character.name,
      power: character.power
    }
    */

    const newCharacter: Character = {
      id: uuid(),
      ...character // Es lo mismo el el Object literal
    }

    this.characters = [...this.characters, newCharacter];
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  /*
  onDelete(id: number): void {
    this.characters.splice(id, 1);
  }
  */

}

