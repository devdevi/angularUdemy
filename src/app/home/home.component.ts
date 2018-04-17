import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts1: object;
  constructor(private http: HttpClient) {
    // Eso de ariba lo hacemos para poder hacer una llamada de http
    // here we call de Api call
    //  Usamos el constructor para inyectar data o algo asi
  }
  ngOnInit() {
    // ESTO ES UN CICLO DE VIDA
    this.http.get(`https://jsonplaceholder.typicode.com/posts`).subscribe(posts1 => {
      this.posts1 = posts1;
      console.log(this.posts1)
    })

  }

}
