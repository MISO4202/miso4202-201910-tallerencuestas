import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pregunta } from 'src/app/models/Pregunta';

@Component({
  selector: 'app-pregunta-unicarespuesta',
  templateUrl: './pregunta-unicarespuesta.component.html',
  styleUrls: ['./pregunta-unicarespuesta.component.css']
})
export class PreguntaUnicarespuestaComponent implements OnInit {

  @Input()
  pregunta: Pregunta;
  @Output()
  uploaded = new EventEmitter<string>();


  respuestaSeleccionada:number=-1;
  constructor() { }

  ngOnInit() {
    if(this.pregunta && this.pregunta.respuestas.length>0){

      this.respuestaSeleccionada = this.pregunta.respuestas[0].idrespuesta
    }
  }

  siguiente(){
    for(var i=0;i<this.pregunta.respuestas.length;i++){
      
      if(this.pregunta.respuestas[i].idrespuesta == this.respuestaSeleccionada){
        this.pregunta.respuestas[i].isSelected = true;
      }
    }

    this.respuestaSeleccionada=-1;
    this.uploaded.emit('siguiente');
  }

}
