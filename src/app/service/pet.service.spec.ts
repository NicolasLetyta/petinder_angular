import {PetService} from "./pet.service";
import {Pet} from '../model/Pet';
import {of} from 'rxjs';
import {TestBed} from '@angular/core/testing';
import {HttpClient, provideHttpClient} from '@angular/common/http';


describe('TestService', () => {
  let service: PetService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetService, provideHttpClient()]
    });

    service = TestBed.inject(PetService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should verify the http call', (done) => {
    // given
    const petsResult: Pet[] = [
      {id: 1, name: 'test 1', kind: 'cat', image: 'test_1.jpg', profileText: 'test', popularity: 1},
      {id: 2, name: 'test 2', kind: 'dog', image: 'test_2.jpg', profileText: 'test', popularity: 2}
    ];

    const httpClientSpy = jest
      .spyOn(httpClient, 'get')
      .mockReturnValue(of(petsResult));

    // when
    let pets = service.getPets().subscribe((pets: Pet[]) => {
      // then
      expect(httpClientSpy).toHaveBeenCalled();
      expect(pets).toEqual(petsResult);
      done();
    });
  });



});
