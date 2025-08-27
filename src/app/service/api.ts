import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface pelicula {
  id_pelicula: number;
  titulo: string;
  anio: number;
  director: string;
}

@Injectable({
  providedIn: 'root'
})
export class Api {

  private url = 'https://4ths2vln-8000.brs.devtunnels.ms/'

  constructor(private http: HttpClient){}

  getPeliculas(): Observable<pelicula[]> {
    return this.http.get<pelicula[]>(this.url+ 'lista_peliculas/');
  }
  
}
