import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Pregunta } from 'src/app/models/Pregunta';

@Component({
  selector: 'app-pregunta-abierta',
  templateUrl: './pregunta-abierta.component.html',
  styleUrls: ['./pregunta-abierta.component.css']
})
export class PreguntaAbiertaComponent implements OnInit {

  @Output()
  uploaded = new EventEmitter<string>();

  @ViewChild('f') form: NgForm;

  @Input()
  pregunta: Pregunta;

  
  constructor() { }

  ngOnInit() {
    this.pregunta.respuesta = "";
  }

  siguiente(){
    this.uploaded.emit('siguiente');
  }

}
