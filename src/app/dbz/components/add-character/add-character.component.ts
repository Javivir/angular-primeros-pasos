import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character>= new EventEmitter();  // una propiedad que es el emisor

  public character: Character = {                                     // propiedad character
      name: '',
      power: 0
  }

  emitCharacter(){

    console.log(this.character);
    // debugger;

    if ( this.character.name.length === 0 ) return;

    // this.onNewCharacter.emit(this.character);
    this.onNewCharacter.emit({...this.character});  // se envía una copia del objeto por emit() pq es asincrono, y antes de llegar con name="0" se cambiaba

    this.character.name ="";
    this.character.power=0;
    // this.character = { name:"", power=0 }    // se crea un nuevo objeto, la referencia se pierde
  }

}
// El por qué ocurre eso es porque en emit() estamos mandando el mismo objeto ya seteado antes, pero con valores nuevos. Es decir, estamos agregandi/pintando en la lista el mismo objeto repetido. Y cada vez que se cambia su valor, se cambia en todas sus referencias.
// De hecho, seguramente el método emit() sea asíncrono en Angular. Lo que significa que desde que lo llamas, hasta que se ejecuta puede pasar cierto lapso de tiempo (milisegundos). A lo que llegas a la ejecución real, puedes haber ya modificado el objeto nuevamente (name = '', power=0) con lo que podrías perder los valores ya seteados en el formulario.
// La solución es bien sencilla: Mandar una copia del objeto, para que la referencia sea distinta:     this.onNewCharacter.emit({ ...this.character });

////////////
// En la primera forma, se está modificando el objeto original al que se hace referencia en otras partes del código, mientras que en la segunda forma, se está creando un nuevo objeto y asignándolo a la variable "this.character".

// En la primera forma, cualquier otra parte del código que tenga una referencia al objeto original "this.character" se verá afectada por los cambios realizados en los valores de name y power. Esto puede causar problemas si se espera que el objeto mantenga sus valores originales.

// En la segunda forma, se está creando un nuevo objeto y asignándolo a la variable "this.character", lo que significa que cualquier otra parte del código que tenga una referencia a "this.character" seguirá apuntando al objeto original con sus valores originales. Esto puede ser útil si se quiere asegurar que el objeto original no se modifique por error.
