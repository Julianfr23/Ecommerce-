import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewDiscountComponent } from './edit-new-discount.component';

describe('EditNewDiscountComponent', () => {
  let component: EditNewDiscountComponent;
  let fixture: ComponentFixture<EditNewDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
