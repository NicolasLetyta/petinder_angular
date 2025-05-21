import {TestBed} from '@angular/core/testing';
import {PetService} from "./pet.service";
import {provideHttpClient} from "@angular/common/http";


describe('TestService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(PetService);
  });

  it('should call the backend', (done) => {
    service.getPets().subscribe((pets) => {
      console.log(pets);
      done();
    });
  });
});
