import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewDiscountComponent } from './delete-new-discount.component';

describe('DeleteNewDiscountComponent', () => {
  let component: DeleteNewDiscountComponent;
  let fixture: ComponentFixture<DeleteNewDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNewDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
