import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  api = 'http://localhost:8000/'; // tu base
  public ingresado$ = new BehaviorSubject<boolean>(false);
  public user$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

    login(user: string, password: string): Observable<any> {
    return this.http.post(this.api + 'login_usuario/', { user, password }, { withCredentials: true })
      .pipe(tap((res: any) => {
        // backend devuelve mensaje y cookies; guardamos user en memoria
        this.ingresado$.next(true);
        this.user$.next(user);
      }));
  }

  fetchUser(): Observable<any> {
    return this.http.get(this.api + 'usuario_actual/', { withCredentials: true })
      .pipe(tap((res: any) => {
        if (res && res.user) {
          this.ingresado$.next(true);
          this.user$.next(res.user);
        } else {
          this.ingresado$.next(false);
          this.user$.next(null);
        }
      }));
  }

  refreshAccess(): Observable<any> {
    // Llama al endpoint refresh_access; backend renueva cookie 'access'.
    return this.http.post(this.api + 'refresh_access/', {}, { withCredentials: true });
  }
  
}
