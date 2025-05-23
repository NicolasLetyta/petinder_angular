import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {PetService} from '../../service/pet.service';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {PetResponse} from '../../model/PetResponse';
import {PetCreatePayload} from '../../model/PetCreatePayload';
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
  @Output() petsChanged = new EventEmitter();

  petForm = this.#formBuilder.nonNullable.group({
    //id: this.#formBuilder.nonNullable.control('', Validators.required), //not needed -> dto is used for input and output
    name: this.#formBuilder.nonNullable.control('', Validators.required),
    kind: this.#formBuilder.nonNullable.control('', Validators.required),
    image: this.#formBuilder.nonNullable.control('', Validators.required),
    profileText: this.#formBuilder.nonNullable.control('', Validators.required),
    //popularity: this.#formBuilder.nonNullable.control('', Validators.required)
  })

  onSubmit() {
    console.warn(this.petForm.value);
    if(this.petForm.valid){
      const {name, kind, image, profileText} = this.petForm.value as PetCreatePayload
      //super clean -> destructuring field from petForm.value into separate constants

      const petInput: PetCreatePayload = {
        name: name,
        kind: kind,
        image: image,
        profileText: profileText,
      }

      this.petService.addPet(petInput).subscribe({ next: () => {
          this.petsChanged.emit() //next: is manditory, only after subscription do we emit the change
        }
      })
    }else {
      console.error("")
    }

  }
  constructor() {
  }

}
