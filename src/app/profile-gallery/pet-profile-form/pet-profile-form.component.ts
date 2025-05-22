import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {PetService} from '../../service/pet.service';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Pet} from '../../model/Pet';
import {PetForm} from '../../model/PetForm';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pet-profile-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './pet-profile-form.component.html',
  styleUrl: './pet-profile-form.component.css'
})
export class PetProfileFormComponent {
  readonly petService= inject(PetService);
  readonly #formBuilder = inject(FormBuilder)
  @Output() petsChanged = new EventEmitter<Pet[]>();

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
        this.petsChanged.emit() //next: is manditory, only after subscription do we emit the change
      }
    })
  }

  constructor() {
  }

}
