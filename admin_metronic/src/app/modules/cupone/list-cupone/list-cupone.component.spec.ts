import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuponeComponent } from './list-cupone.component';

describe('ListCuponeComponent', () => {
  let component: ListCuponeComponent;
  let fixture: ComponentFixture<ListCuponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
