import { Component} from '@angular/core';
import { Api, pelicula } from '../../service/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})

export class Movies{
  
  peliculas: any[] = [];


  constructor(private apiservice: Api) {}

  ngOnInit(): void{
    this.llenar_data();
  }

  llenar_data(){
    this.apiservice.getPeliculas().subscribe( peliculas =>{
      this.peliculas = peliculas
      console.log(this.peliculas)
    }

    )
  }

  
}
