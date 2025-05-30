import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewSliderComponent } from './edit-new-slider.component';

describe('EditNewSliderComponent', () => {
  let component: EditNewSliderComponent;
  let fixture: ComponentFixture<EditNewSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
