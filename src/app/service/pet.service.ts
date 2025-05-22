import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Pet} from '../model/Pet';




@Injectable({
  providedIn: 'root'
})
export class PetService {
  private endPoint: string;
  readonly #httpClient= inject(HttpClient);


  constructor() {
    this.endPoint = environment.backendUrl+'/pets';
  }

  getPets(): Observable<any> {
    return this.#httpClient.get<[Pet]>(this.endPoint).pipe(
      map(pets => pets.sort((a, b) => a.name.localeCompare(b.name)))
      // sort() is equivalent to comparators in java localcompare is specific to strings and can be configures (eg case sensitivity?)
      // if values that can be subtracted are compared => just subtract them if the result is negative, the second argument goes first a before b
    )
  }

  addPet () {

  }

}
