import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should have as title "Petinder"', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const header = fixture.componentInstance;
      expect(header.title).toEqual('Petinder');
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


