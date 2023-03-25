import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormPageComponent } from './signup-form-page.component';

describe('SignupFormPageComponent', () => {
  let component: SignupFormPageComponent;
  let fixture: ComponentFixture<SignupFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
