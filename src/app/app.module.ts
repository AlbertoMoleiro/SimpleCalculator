import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraDivisasComponent } from './calculadora-divisas/calculadora-divisas.component';
import { DatosCompraComponent } from './datos-compra/datos-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalculadoraDivisasComponent,
    DatosCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
