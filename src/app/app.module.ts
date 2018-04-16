import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// poner esto siempre que vas a trabajar con Formularios
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
