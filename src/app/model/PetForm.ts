import {FormControl} from '@angular/forms';

export interface PetForm {
  id: FormControl<string>;
  name: FormControl<string>;
  kind: FormControl<string>;
  image: FormControl<string>;
  profileText: FormControl<string>;
  popularity: FormControl<string>;
}
