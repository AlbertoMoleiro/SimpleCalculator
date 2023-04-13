import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
   //Calculadora
   title = 'Calculadora';
   num1: number=0;
   num2: number=0;
   total: number=0;

   sumar(){
     this.total=this.num1+this.num2;
   }
   restar(){
     this.total=this.num1-this.num2;
   }
   multiplicar(){
     this.total=this.num1*this.num2;
   }
   dividir(){
     this.total=this.num1/this.num2;
   }

}
