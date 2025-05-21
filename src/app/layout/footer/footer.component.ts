import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private _year: number;

  constructor() {
    this._year = Date.now();
  }

  get year(): number {
    return this._year;
  }

}
