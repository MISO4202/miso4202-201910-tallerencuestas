import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent }  from './app.component';
import {HomeComponent} from './pages/home/home.component'
import {FinComponent} from './pages/fin/fin.component'
import {PreguntaComponent} from './pages/pregunta/pregunta.component'

 

 const properties: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent } ,
  { path: 'fin', component: FinComponent }  ,
  { path: 'pregunta', component: PreguntaComponent }  
];


@NgModule({
  imports: [ RouterModule.forRoot(properties,{scrollPositionRestoration: 'enabled',useHash: false,
  anchorScrolling: 'enabled'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}