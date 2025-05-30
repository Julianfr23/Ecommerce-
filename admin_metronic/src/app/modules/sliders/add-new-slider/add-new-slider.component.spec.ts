import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSliderComponent } from './add-new-slider.component';

describe('AddNewSliderComponent', () => {
  let component: AddNewSliderComponent;
  let fixture: ComponentFixture<AddNewSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
