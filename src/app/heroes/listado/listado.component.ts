import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  constructor() { }

  heroes: string[] = ['Hulk', 'Goku', 'Vegeta', 'Gohan', 'Piccolo'];
  dropedHeroe: string = '';

  dropHeroe() {
    this.dropedHeroe =  this.heroes.shift() || '';
  }
}
