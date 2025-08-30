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

  /*private url = 'https://4ths2vln-8000.brs.devtunnels.ms/'*/
  private url = 'http://localhost:8000/'
  //private url = 'https://4ths2vln-8001.brs.devtunnels.ms/'

  constructor(private http: HttpClient){}

  getPeliculas(): Observable<pelicula[]> {
    return this.http.get<pelicula[]>(this.url+ 'lista_peliculas/');
  }

  Login(user : string, password : string){
    
    document.cookie = 'access=; Max-Age=0';
    document.cookie = 'refresh=; Max-Age=0';
    return this.http.post(this.url+'login_usuario/', {user, password}, { withCredentials: true })
  }

  
}
