import {Component, inject} from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/Pet';
import {AsyncPipe} from '@angular/common';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {NameFilterPipe} from '../pipes/name-filter.pipe';

@Component({
  selector: 'app-profile-gallery',
  imports: [AsyncPipe, FormsModule, NameFilterPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent{
  readonly petService= inject(PetService);
  readonly #formBuilder = inject(FormBuilder)
  pets$ = this.petService.getPets();
  selectedPet: Pet
  searchText: string = ''

  private petForm = this.#formBuilder.group({
    name: ['', Validators.required],
    kind: ['', Validators.required],
    image: [''],
    profileText: ['', Validators.required],
  })

  constructor() {
  }

  isPetSelected() {
    return this.selectedPet != null;
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet
    console.log(this.selectedPet);
  }

  getPetForm() {
    return this.petForm
  }


}
