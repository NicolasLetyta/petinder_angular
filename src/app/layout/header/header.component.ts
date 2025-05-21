import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private _title: string;

  constructor() {
    this._title = 'Petinder'
  }

  get title(): string {
    return this._title;
  }

}
