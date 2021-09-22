import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import do modulo criado
import { CalculadoraModule } from './calculadora';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //modulo importado
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
