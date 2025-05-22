import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from '../model/Pet';
import {map, Observable} from 'rxjs';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], name: string): Pet[] {
    return pets.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase()))
  }

}
