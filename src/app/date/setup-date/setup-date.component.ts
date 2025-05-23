import {Component, inject, OnInit} from '@angular/core';
import {PetService} from '../../service/pet.service';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {Observable} from 'rxjs';
import {PetResponse} from '../../model/PetResponse';
import {AsyncPipe} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-setup-date',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit{
  private readonly route = inject(ActivatedRoute)
  readonly #formBuilder = inject(FormBuilder)
  readonly #petService = inject(PetService)

  selectedPetName: string|null
  selectedPet: Observable<PetResponse>

  dateForm = this.#formBuilder.nonNullable.group({
    name: this.#formBuilder.nonNullable.control('', Validators.required),
  }) //Not really sure what the form is supposed to be so for now its the name of the person that wants
  // to arrange a date!

  // SUPER IMPORTANT!!!! -> JUST BECAUSE IM USING THE NEW WAY OF INJECTING WITH "inject()",
  // DOES NOT MEAN THAT THE OnInit template AND ngOnInit() ARE USELESS, YES I CAN INITIALIZE THE
  // ROUTE PARAM WITH SNAPSHOT, BUT ngOnInit() ALLOWS ME TO LOG AT INITIALIZATION WHICH LITERALLY
  // GIVES ME ALL THE INFO I NEED TO DEBUG THE GET REQUEST!!!
  ngOnInit() {
    this.selectedPetName = this.route.snapshot.paramMap.get('name')
    if(this.selectedPetName){
      this.selectedPet = this.#petService.getPetByName(this.selectedPetName)
      console.log(this.selectedPetName)
    }else {
      console.error("selectedPetName is empty")
    }
  }

  //can this method be called anything? What if I have 2 forms on the page? -> i would need 2 onSubmit methods
  //they would then be bound to 2 buttons meaning i would need to separate logic by having different method names?
  onSubmit() {
    // logic for setting up a date!!
    console.log("Button was pressed, logic for date inc>")
  }
}
