export class Respuesta {   
    

    isSelected:Boolean;


    constructor(
        public idrespuesta: number,
        public respuesta: string,
        public pregunta_respuesta:number,
        public siguientemodulo:number,
        public siguientepregunta
      ) { 

        this.isSelected= false;
    }
    
}