import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewSliderComponent } from './delete-new-slider.component';

describe('DeleteNewSliderComponent', () => {
  let component: DeleteNewSliderComponent;
  let fixture: ComponentFixture<DeleteNewSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNewSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
