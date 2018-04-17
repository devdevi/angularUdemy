import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(thatForm: NgForm) {
    this.http.post(`https://jsonplaceholder.typicode.com/posts`, {
      id: Math.random(),
      userId: Math.random(),
      title: thatForm.value.title
    }).subscribe(res => {
      console.log(res)
    }, error => {
      console.log('Algo esta mal')

    });

    // VAMOS A Enviar la data

  }

}
