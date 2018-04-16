import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //  El selector puede ser un div igual
  templateUrl: './app.component.html',
  //  Podemos dejar solo template y escribir el html ahi directo
  //  Templateurl hace referencia a un direccion donde se encunetra el template
  styleUrls: ['./app.component.css']
  // pasa lo mismo que el los templates
  // Podemos escribir  styles: y escribir ahi mismo los stylos o hacer refencia a algun lugar donde se encuentran
})
export class AppComponent {
  title = 'Mi Primera aplicacion';
  name = 'visaka';
  // string interpolation llevas las variables
  last = 'Devi'
  city = 'Santiago Cl'
  // Vamos a usar typecript
  status:boolean;
  //  esta es una variable que pondremos en nuestro templte
  constructor() {
    // aqui esta la data
    console.log()
    this.getUserStatus()
  }
  displayName() {
    return this.name
  }
  getUserStatus(){
    this.status = false;
    // Cadavez que esta data cambia  se va a refleajar un el html
  }
  greatPerson(){
    alert('Hi you are a Good Person')
  }
}
