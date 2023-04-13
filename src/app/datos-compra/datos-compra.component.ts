import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-compra',
  templateUrl: './datos-compra.component.html',
  styleUrls: ['./datos-compra.component.css']
})
export class DatosCompraComponent {
  email: string = '';
  address: string = '';
  phone: string = '';
  payment: string = 'Efectivo';
  info:boolean = false;
  show:boolean = false;
  comunities: string[]= ["Madrid","Cataluña","Andalucía","Galicia","País Vasco","Aragón","Asturias","Canarias","Cantabria","Castilla y León","Castilla-La Mancha","Extremadura","Islas Baleares","La Rioja","Navarra","Comunidad Valenciana","Ceuta","Melilla"];
  comunity: string = this.comunities[0];

 showInfo(){
    this.show = !this.show;
 }

}
