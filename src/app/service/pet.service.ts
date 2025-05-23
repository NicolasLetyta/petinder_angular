import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PetResponse} from '../model/PetResponse';
import {PetCreatePayload} from '../model/PetCreatePayload';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly endPoint: string;
  readonly #httpClient= inject(HttpClient);

  constructor() {
    this.endPoint = environment.backendUrl+'/pets';
  }

  getPets(): Observable<any> {
    return this.#httpClient.get<[PetResponse]>(this.endPoint).pipe(
      map(pets => pets.sort((a, b) => a.name.localeCompare(b.name)))
      // sort() is equivalent to comparators in java localcompare is specific to strings and can be configured (eg case sensitivity?)
      // if values that can be subtracted are compared => just subtract them if the result is negative, the second argument goes first a before b
    )
  }

  getPetByName(petName: string): Observable<PetResponse> {
    return this.#httpClient.get<PetResponse>(this.endPoint+`/${petName}`)
  }

  addPet (pet: PetCreatePayload): Observable<PetResponse> {
    return this.#httpClient.post<PetResponse>(this.endPoint, pet)
  }

  deletePet(petId: number) {
    const response = this.#httpClient.delete(this.endPoint+`/${petId}`)
    console.log(response)
    return response
  }

}
