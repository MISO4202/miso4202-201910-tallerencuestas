import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaMultiplerespuestaComponent } from './pregunta-multiplerespuesta.component';

describe('PreguntaMultiplerespuestaComponent', () => {
  let component: PreguntaMultiplerespuestaComponent;
  let fixture: ComponentFixture<PreguntaMultiplerespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaMultiplerespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaMultiplerespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
