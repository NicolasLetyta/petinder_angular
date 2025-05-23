import {Component, inject, Input} from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/Pet';
import {AsyncPipe} from '@angular/common';
import {NameFilterPipe} from '../pipes/name-filter.pipe';
import {PetProfileFormComponent} from './pet-profile-form/pet-profile-form.component';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-profile-gallery',
  imports: [AsyncPipe, NameFilterPipe, PetProfileFormComponent, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent{
  readonly petService= inject(PetService);
  @Input() pets$ = this.petService.getPets();
  selectedPet: Pet
  searchText: string = ''

  refreshPets(): void {
    this.pets$ = this.petService.getPets()
  }

  isPetSelected() {
    return this.selectedPet != null;
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet
    console.log(this.selectedPet);
  }

  constructor() {
  }

}
