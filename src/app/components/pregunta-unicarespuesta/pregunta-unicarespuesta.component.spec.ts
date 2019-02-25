import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaUnicarespuestaComponent } from './pregunta-unicarespuesta.component';

describe('PreguntaUnicarespuestaComponent', () => {
  let component: PreguntaUnicarespuestaComponent;
  let fixture: ComponentFixture<PreguntaUnicarespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaUnicarespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaUnicarespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
