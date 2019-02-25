import { Respuesta } from "./Respuesta";

export class Pregunta {  
    
    readonly ABIERTA = 0;
    readonly MULTIPLE = 1;
    readonly UNICA = 2;
    
    
    respuesta:String;

    
    constructor(
        public idpregunta: number,
        public pregunta: string,
        public modulo_pregunta:number,
        public espreguntainicial:number,
        public tipo: number,
        public siguientepregunta:number,
        public siguientemodulo:number,
        public respuestas: Respuesta[]
      ) {  }

    addRespuesta(respuesta:Respuesta){
        this.respuestas.push(respuesta);

    }
    
}