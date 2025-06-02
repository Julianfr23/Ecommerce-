import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewCuponeComponent } from './delete-new-cupone.component';

describe('DeleteNewCuponeComponent', () => {
  let component: DeleteNewCuponeComponent;
  let fixture: ComponentFixture<DeleteNewCuponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNewCuponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewCuponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
