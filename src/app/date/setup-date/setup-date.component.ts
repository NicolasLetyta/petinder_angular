import {Component, inject, OnInit} from '@angular/core';
import {PetService} from '../../service/pet.service';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';
import { Routes } from '@angular/router';
import {Pet} from '../../model/Pet';
import {AsyncPipe} from '@angular/common';
import {FormGroup ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-setup-date',
  imports: [
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit{
  private readonly route = inject(ActivatedRoute)
  readonly #petService = inject(PetService)
  sendTextForm: FormGroup //temp: so that template renders
  selectedPetName: string|null
  selectedPet: Observable<Pet>
  //selectedPetName = this.route.snapshot.paramMap.get('name')
  //selectedPet = this.#petService.getPetByName(this.selectedPetName || '')

  ngOnInit() {
    this.selectedPetName = this.route.snapshot.paramMap.get('name')
    this.selectedPet = this.#petService.getPetByName(this.selectedPetName || '')
    console.log(this.selectedPetName)
    console.log(this.selectedPet)
  }

}
