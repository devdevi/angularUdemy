import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

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
  // firsName = prompt('Cual es tu nombre?')
  // name = `${this.firsName}`;
  name = 'Visaka';
  // string interpolation llevas las variables
  last = 'Devi'
  lastName :string;
  city = 'Santiago Cl'
  // Vamos a usar typecript
  status:boolean;
  //  esta es una variable que pondremos en nuestro templte
  posts: object[];
  user = {
    username:" ",
    password:""
  }
  constructor() {
    // aqui esta la data
    console.log()
    this.getUserStatus();
    this.lastName ="Chavez"
    this.posts = [
        { tite: 'post'},
        { tite: 'post'},
        { tite: 'post'},
        { tite: 'post'},
        { tite: 'post'},
    ]
 
  }
  displayName() {
    return this.name
  }
  getUserStatus(){
    this.status = true;
    // Cadavez que esta data cambia  se va a refleajar un el html
  }
  greatPerson(){
    alert('Hi you are a Good Person')
  }
  mousingOver(){
    alert('Why you Touch me!')
  }
  keyDowning(){
    alert('oh La La')
  }
  onSubmit(theForm: NgForm){
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password
    console.log(this.user)
  }
}
