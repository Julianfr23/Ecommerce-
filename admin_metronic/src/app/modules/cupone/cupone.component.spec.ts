import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponeComponent } from './cupone.component';

describe('CuponeComponent', () => {
  let component: CuponeComponent;
  let fixture: ComponentFixture<CuponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
