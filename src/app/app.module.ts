import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FinComponent } from './pages/fin/fin.component';
import { AppRoutingModule }     from './app-routing.module';
import { PreguntaAbiertaComponent } from './components/pregunta-abierta/pregunta-abierta.component';
import { PreguntaMultiplerespuestaComponent } from './components/pregunta-multiplerespuesta/pregunta-multiplerespuesta.component';
import { PreguntaUnicarespuestaComponent } from './components/pregunta-unicarespuesta/pregunta-unicarespuesta.component';
import { PreguntaComponent } from './pages/pregunta/pregunta.component';
import { FormsModule } from '@angular/forms';


import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinComponent,
    PreguntaAbiertaComponent,
    PreguntaMultiplerespuestaComponent,
    PreguntaUnicarespuestaComponent,
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
