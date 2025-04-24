import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Inyectamos el servicio, ya podemos utilizar toda su lógica interna (datos, métodos)
  constructor( private dbzService: DbzService ) {}

  // Getter para obtener la lista de los personajes y mandar la data a un componente hijo
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character );
  }

}


