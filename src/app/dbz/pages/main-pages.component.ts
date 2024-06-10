import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-pages.component.html'
})
export class MainPageComponent {

  constructor( private dbzService: DbzService){}

  get characters(): Character[] {
    return [ ...this.dbzService.characters]
  }

  onDeleteCharacter ( id:string): void {
    this.dbzService.deleteCharacterById( id )
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter(character);
  }

}

// 01:_  /////

// ponerlo como argumento hace la inyección de dependencias, poner public habilita en todo el main-page la info utilizada en ese servicio.
// dbzService es una clase con sus propiedades y métodos
// los pesonajes están en dbzService.characters

// en la intro constructor( private name:string){} > crea propiedad name en nuestro compontente. En NG sirve para hacer la inyección de dependencias. Me traigo el servicio Dbz a main-pages.ts. de esta forma disponible t(toda la infor del servicio) para todo el componente.
// no ovidar la dependencia, ni la palabra public

// 74:_  Hacerlo private /////


// return this.dbzService.characters; > si se hace modificación hay se modifica la data del servicio.
// return [ ...this.dbzService.characters] > se crea una copia de cada personaje
// dbzService.characters > pasa a ser characters. Pq ya hay un método que se llama así en main.ts
