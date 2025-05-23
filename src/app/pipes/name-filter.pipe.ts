import { Pipe, PipeTransform } from '@angular/core';
import {PetResponse} from '../model/PetResponse';
import {map, Observable} from 'rxjs';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: PetResponse[], name: string): PetResponse[] {
    return pets.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase()))
  }

}
