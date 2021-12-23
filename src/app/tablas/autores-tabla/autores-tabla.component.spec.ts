import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresTablaComponent } from './autores-tabla.component';

describe('AutoresTablaComponent', () => {
  let component: AutoresTablaComponent;
  let fixture: ComponentFixture<AutoresTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
