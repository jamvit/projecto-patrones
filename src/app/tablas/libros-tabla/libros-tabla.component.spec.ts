import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosTablaComponent } from './libros-tabla.component';

describe('LibrosTablaComponent', () => {
  let component: LibrosTablaComponent;
  let fixture: ComponentFixture<LibrosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
