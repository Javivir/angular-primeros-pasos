

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'  // 01
})
export class DbzService {      //sercio , clase con ese decorador lo combierte en servicio, y tiene la propiedad provided: root, (si no se mete aquí hay que ir a add.module.ts y meterlo. Si se hace asi nuestro servicio hace un Singlenton. Instancia en todo el servicio, la info disponible. )

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  },{
    id: uuid(),
    name: 'Goky',
    power: 9500,
  },{
    id: uuid(),
    name: 'Trunk',
    power: 7000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }];

  addCharacter( character: Character):void {
    const newCharacter : Character = {  ...character ,id: uuid()  }  // toma todas las proiedades y esparcelas, si viene id lo pisas
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void {
  //   this.characters.splice(index, 1);
  // }

    deleteCharacterById( id:string ):void{

      this.characters = this.characters.filter( character => character.id !== id )

    }


  // onNewCharacter( character: Character):void {
  //   const newCharacter : Character = {
  //     id: uuid(),
  //     name: character.name,
  //     power: character.power,
  //   }
  //   this.characters.push(newCharacter);
  // }

}


// 01 :: de esta forma se hace un singlenton en toda la aplicación y no hay que ponerlo en en el app.molule.ts en   providers: []. Siempre que lo haga a traves de inyección de dependencias siempre encontrará el valor como se encuentra en ese momento.La misma instancia.
