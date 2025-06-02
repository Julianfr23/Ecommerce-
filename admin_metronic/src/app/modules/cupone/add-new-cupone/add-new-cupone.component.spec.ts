import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCuponeComponent } from './add-new-cupone.component';

describe('AddNewCuponeComponent', () => {
  let component: AddNewCuponeComponent;
  let fixture: ComponentFixture<AddNewCuponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCuponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCuponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
