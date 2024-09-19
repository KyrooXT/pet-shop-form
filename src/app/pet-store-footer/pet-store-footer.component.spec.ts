import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetStoreFooterComponent } from './pet-store-footer.component';

describe('PetStoreFooterComponent', () => {
  let component: PetStoreFooterComponent;
  let fixture: ComponentFixture<PetStoreFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetStoreFooterComponent]
    });
    fixture = TestBed.createComponent(PetStoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
