import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { Pregunta } from 'src/app/models/Pregunta';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {



  pregunta:Pregunta ;
  constructor(private preguntasService:PreguntasService,private router: Router,private alertService: AlertService) { }

  ngOnInit() {

    this.preguntasService.getSiguiente(null,null).subscribe(

      data  => {      
        console.log("PUT Request is successful ", data);
        if( data.status === 'success'){
          this.pregunta = data.data

        }else{
          this.alertService.danger('Error cargando siguiente pregunta');
        }
      
      },
      
      error  => {
      
        this.alertService.danger('Error cargando siguiente pregunta');
      
      }
      
      );

  }

  siguiente(event){
    if(this.pregunta.tipo===0){
      if(this.pregunta.siguientepregunta!==-1 ||this.pregunta.siguientemodulo!==-1 ){

        this.preguntasService.getSiguiente(this.pregunta.siguientemodulo,this.pregunta.siguientepregunta).subscribe(

          data  => {      
            
            if( data.status === 'success'){

              this.preguntasService.addRespuesta(this.pregunta);
              this.pregunta = data.data
    
            }else{
              this.alertService.danger('Error cargando siguiente pregunta');
            }
          
          },
          
          error  => {
            
            this.alertService.danger('Error cargando siguiente pregunta');
          
          }
          
          );

      }
      else{
        this.navegarAFin();
        
      }
    }

    else{
      //Se revisa si alguna de las respuestas esta seleccionada
      var idmodulorespuesta = -1;
      var idpreguntarespuesta = -1;
      for(var i =0;i<this.pregunta.respuestas.length;i++){

        console.log(respuesta);
        var respuesta =  this.pregunta.respuestas[i];
        if(respuesta.isSelected && (respuesta.siguientemodulo!==-1||respuesta.siguientepregunta!==-1)){

          idmodulorespuesta = respuesta.siguientemodulo;
          idpreguntarespuesta = respuesta.siguientepregunta;
        }

      }
      if(idmodulorespuesta!==-1 || idpreguntarespuesta!=-1){
        this.preguntasService.getSiguiente(idmodulorespuesta,idpreguntarespuesta).subscribe(

          data  => {      
            
            if( data.status === 'success'){
              this.preguntasService.addRespuesta(this.pregunta);
              this.pregunta = data.data
    
            }else{
              this.alertService.danger('Error cargando siguiente pregunta');
            }
          
          },
          
          error  => {
          
            this.alertService.danger('Error cargando siguiente pregunta');
          
          }
          
          );
      }
      else if(this.pregunta.siguientepregunta!==-1 ||this.pregunta.siguientemodulo!==-1 ){

        this.preguntasService.getSiguiente(this.pregunta.siguientemodulo,this.pregunta.siguientepregunta).subscribe(

          data  => {      
            
            if( data.status === 'success'){
              this.preguntasService.addRespuesta(this.pregunta);
              this.pregunta = data.data
    
            }else{
              this.alertService.danger('Error cargando siguiente pregunta');
            }
          
          },
          
          error  => {
          
            this.alertService.danger('Error cargando siguiente pregunta');
          
          }
          
          );

      }
      else{
        this.navegarAFin();
      }
    }

  }

  navegarAFin(){

    this.preguntasService.guardarRespuestas(this.pregunta).subscribe(

      data  => {  
        if( data.status === 'success'){
          this.router.navigate(['/fin']);
        }else{
          this.alertService.danger('Error guardando encuesta');
        }
        
      },
      
      error  => {
        this.alertService.danger('Error guardando encuesta');
      }
      
      );
    
  }

}
