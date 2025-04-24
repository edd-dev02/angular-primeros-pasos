import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-add-character',
	templateUrl: './add-character.component.html',
	styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };


  emitCharacter(): void {
    console.log(this.character);

    // Validación para que el campo del nombre del caracter tenga obligatoriamente un valor
    if (this.character.name.length === 0) return;

    // Si pasa la validación, emitimos el evento y mandamos los argumentos del objeto
    this.onNewCharacter.emit({...this.character});

    // Después de emitir el evento, reiniciamos el objeto
    this.character = { name : '', power : 0 };
  }

}

