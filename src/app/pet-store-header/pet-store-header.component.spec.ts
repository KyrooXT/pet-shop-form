import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetStoreHeaderComponent } from './pet-store-header.component';

describe('PetStoreHeaderComponent', () => {
  let component: PetStoreHeaderComponent;
  let fixture: ComponentFixture<PetStoreHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetStoreHeaderComponent]
    });
    fixture = TestBed.createComponent(PetStoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
