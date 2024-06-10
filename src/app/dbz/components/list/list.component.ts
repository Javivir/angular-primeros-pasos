import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{     //[characterList]="dbzService.characters" es una propiedad en el componente
    name: 'Trunk',
    power: 10                    //name:'', power:0,
  }]

  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter();


  // onDelete

  onDeleteCharacter (id?:string):void {
    if(!id) return;                                           // se añade pora que admita valor undefined
    console.log({id})
    this.onDelete.emit(id);
  }



}
