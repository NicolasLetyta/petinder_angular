import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {PetResponse} from '../../model/PetResponse';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {PetService} from '../../service/pet.service';

@Component({
  selector: 'app-profile-details',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  @Input({required: true}) pet: PetResponse
  @Output() deletePetEvent= new EventEmitter
  readonly #petService = inject(PetService)


  deletePet(petId: number) {
    this.#petService.deletePet(petId).subscribe({ next: () => {
      this.deletePetEvent.emit()
      }
    })
  }
}
