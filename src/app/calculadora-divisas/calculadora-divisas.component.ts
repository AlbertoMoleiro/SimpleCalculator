import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-divisas',
  templateUrl: './calculadora-divisas.component.html',
  styleUrls: ['./calculadora-divisas.component.css']
})
export class CalculadoraDivisasComponent {
  cantidad: number=0;
  divisas: string[] = ['USD', 'GBP', 'JPY'];
  divisa: string = this.divisas[0];
  resultado: number=0;

  convertir(): void {
    switch (this.divisa) {
      case 'USD':
        this.resultado = this.cantidad * 1.1;
        break;
      case 'GBP':
        this.resultado = this.cantidad * 0.88;
        break;
      case 'JPY':
        this.resultado = this.cantidad * 120.5;
        break;
    }
  }
}
