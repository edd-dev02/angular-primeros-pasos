import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hawkeye'];
  public deletedHero?: string;


  borrarHeroe(): void {
    this.deletedHero = this.heroNames.pop();
  }

  restoreHeroe():void {
    this.heroNames = [...this.heroNames];
  }
}
