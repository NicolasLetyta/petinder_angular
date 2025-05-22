import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/Pet';
import {AsyncPipe} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NameFilterPipe} from '../pipes/name-filter.pipe';
import {PetForm} from '../model/PetForm';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-gallery',
  imports: [AsyncPipe, FormsModule, NameFilterPipe, ReactiveFormsModule],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent{
  readonly petService= inject(PetService);
  readonly #formBuilder = inject(FormBuilder)
  @Input() pets$ = this.petService.getPets();
  @Output() petsChanged = new EventEmitter<Pet[]>();
  selectedPet: Pet
  searchText: string = ''

  petForm = this.#formBuilder.nonNullable.group<PetForm>({
    id: this.#formBuilder.nonNullable.control('', Validators.required),
    name: this.#formBuilder.nonNullable.control('', Validators.required),
    kind: this.#formBuilder.nonNullable.control('', Validators.required),
    image: this.#formBuilder.nonNullable.control('', Validators.required),
    profileText: this.#formBuilder.nonNullable.control('', Validators.required),
    popularity: this.#formBuilder.nonNullable.control('', Validators.required)
  })

  onSubmit() {
    console.warn(this.petForm.value);
    const petForm = this.petForm.value
    const pet: Pet = {
      id: Number(petForm.id),
      name: petForm.name || '',
      kind: petForm.kind || '',
      image: petForm.image || '',
      profileText: petForm.profileText || '',
      popularity: Number(petForm.popularity)
    }
    this.petService.addPet(pet).subscribe({ next: () => {
      this.refreshPets(this.petService.getPets())
    }
    })
  }

  refreshPets(newPets: Observable<Pet>): void {
    this.pets$ = newPets
    this.petsChanged.emit()
  }

  constructor() {
  }

  isPetSelected() {
    return this.selectedPet != null;
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet
    console.log(this.selectedPet);
  }

}
