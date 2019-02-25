import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/Pregunta';
import { ServerResponse } from '../models/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {


  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  respuestas: Pregunta[] = [];

  constructor(private  httpClient:HttpClient) { }


  getSiguiente(idmodulo,idpregunta): Observable<ServerResponse>{
    var  params = new  HttpParams();
    if(idmodulo&&idmodulo!==-1)
    {
      params=params.set('idmodulo', idmodulo);
    }
    else if(idpregunta&&idpregunta!==-1){
      console.log(idpregunta)
      params=params.set('idpregunta', idpregunta)
    }else{
      this.respuestas = [];
    }
    
    return this.httpClient.get<ServerResponse>("http://localhost:3000/api/pregunta", {params:params});

  }

  addRespuesta(pregunta:Pregunta){
    this.respuestas.push(pregunta);
  }

  guardarRespuestas(pregunta:Pregunta){

    console.log(this.respuestas);
    var respuestasCopy= Object.assign([], this.respuestas);


    respuestasCopy.push(pregunta);

    return this.httpClient.post<ServerResponse>("http://localhost:3000/api/pregunta", JSON.stringify({data:respuestasCopy}), {headers: this.headers});
    
  }


  
}
