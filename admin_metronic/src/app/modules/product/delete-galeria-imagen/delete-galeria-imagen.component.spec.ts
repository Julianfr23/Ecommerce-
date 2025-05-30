import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGaleriaImagenComponent } from './delete-galeria-imagen.component';

describe('DeleteGaleriaImagenComponent', () => {
  let component: DeleteGaleriaImagenComponent;
  let fixture: ComponentFixture<DeleteGaleriaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGaleriaImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGaleriaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
