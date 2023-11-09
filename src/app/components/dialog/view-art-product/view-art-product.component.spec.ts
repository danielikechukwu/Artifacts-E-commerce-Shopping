import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtProductComponent } from './view-art-product.component';

describe('ViewArtProductComponent', () => {
  let component: ViewArtProductComponent;
  let fixture: ComponentFixture<ViewArtProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArtProductComponent]
    });
    fixture = TestBed.createComponent(ViewArtProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
