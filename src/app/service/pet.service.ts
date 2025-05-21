import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private endPoint: string;
  readonly #httpClient= inject(HttpClient);

  constructor() {
    this.endPoint = 'http://localhost:8080/pets';
  }

  getPets(): Observable<any> {
    return this.#httpClient.get(this.endPoint)
  }
}
