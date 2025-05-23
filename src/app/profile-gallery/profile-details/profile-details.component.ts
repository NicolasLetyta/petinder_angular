import {Component, Input} from '@angular/core';
import {PetResponse} from '../../model/PetResponse';
import {RouterLink, RouterLinkActive} from '@angular/router';

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
}
