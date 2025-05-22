import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileGalleryComponent } from './profile-gallery.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ import this


describe('ProfileGalleryComponent', () => {
  let component: ProfileGalleryComponent;
  let fixture: ComponentFixture<ProfileGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileGalleryComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
