import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewCuponeComponent } from './edit-new-cupone.component';

describe('EditNewCuponeComponent', () => {
  let component: EditNewCuponeComponent;
  let fixture: ComponentFixture<EditNewCuponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewCuponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewCuponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
