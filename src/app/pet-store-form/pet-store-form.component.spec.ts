import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetStoreFormComponent } from './pet-store-form.component';

describe('PetStoreFormComponent', () => {
  let component: PetStoreFormComponent;
  let fixture: ComponentFixture<PetStoreFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetStoreFormComponent]
    });
    fixture = TestBed.createComponent(PetStoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
