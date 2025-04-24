import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Contador: {{ counter }}</h3>

        <button (click)="decreaseBy(1)" >-1</button>
        <button (click)="increaseBy(1)" >+1</button>

        <br><br>

        <button (click)="reset(10)">Reset</button>

        <hr><br>
    `,
})

export class CounterComponent {

    constructor() { }

    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    decreaseBy(value: number): void {
        this.counter -= value;
    }

    reset(value: number): void {
        this.counter = value;
    }

}
