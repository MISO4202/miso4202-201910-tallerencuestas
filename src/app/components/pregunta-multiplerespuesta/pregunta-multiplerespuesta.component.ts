import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Pregunta } from 'src/app/models/Pregunta';

@Component({
  selector: 'app-pregunta-multiplerespuesta',
  templateUrl: './pregunta-multiplerespuesta.component.html',
  styleUrls: ['./pregunta-multiplerespuesta.component.css']
})
export class PreguntaMultiplerespuestaComponent implements OnInit {

  @Input()
  pregunta: Pregunta;

  @Output()
  uploaded = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  haySeleccionado(){
    
    for(var i=0;i<this.pregunta.respuestas.length;i++){
      
      if(this.pregunta.respuestas[i].isSelected){
        return true;
      }
    }
    return false;
  }

  siguiente(){
    console.log("Siguiente MR");
    console.log(this.pregunta);
    this.uploaded.emit('siguiente');
  }

}
