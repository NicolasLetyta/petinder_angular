import {Component, inject} from '@angular/core';
import {PetService} from '../service/pet.service';
import {PetResponse} from '../model/PetResponse';
import {AsyncPipe} from '@angular/common';
import {NameFilterPipe} from '../pipes/name-filter.pipe';
import {PetProfileFormComponent} from './pet-profile-form/pet-profile-form.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile-gallery',
  imports: [AsyncPipe, NameFilterPipe, ProfileDetailsComponent, PetProfileFormComponent, FormsModule],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent{
  readonly petService= inject(PetService);

  galleryPets$ = this.petService.getPets();
  selectedPet: PetResponse
  searchText: string = ''

  refreshPets(): void {
    this.galleryPets$ = this.petService.getPets()
  }

  isPetSelected() {
    return this.selectedPet != null;
  }

  selectPet(pet: PetResponse) {
    this.selectedPet = pet
    console.log(this.selectedPet);
  }

  constructor() {
  }

}
