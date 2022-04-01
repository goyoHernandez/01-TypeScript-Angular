import { Component } from "@angular/core"; '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>
    La base es de: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acomular(-base)">- {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acomular(base)">+ {{ base }}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acomular = (num: number): number => {
        return this.numero += num;
    }
} 