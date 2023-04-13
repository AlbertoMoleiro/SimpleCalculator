import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
