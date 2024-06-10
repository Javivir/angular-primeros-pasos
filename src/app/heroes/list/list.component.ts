import { Component, createNgModule } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Iroman','Hulk','She Hulk','Thor'];
  // public deleteHero: number = 0;
  public deletedHero?: string;  //se crea propiedad para que salga del ambito del método removeLastHero();


  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
