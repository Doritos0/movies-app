import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { Auth } from '../../service/auth';

interface UserData {
  id: number;
  id_tipo: number;
  user: string;
}


@Component({
  selector: 'app-profile',
  imports: [LoginForm],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {


  userData: UserData | null = null;
  user: string = '';
  isLoading: boolean = true;

  constructor (private auth : Auth){}

  ngOnInit(): void {
    this.checkAuthStatus();
  }

checkAuthStatus(): void {
    this.auth.fetchUser().subscribe({
      next: (res: any) => {
        if (res) {
          this.user = res.data.user;
          console.log("KSDJFKLSDJFLK",this.user)
          this.userData = res.data;
          console.log('Usuario autenticado:', res.data);
        } else {
          this.user = '';
          this.userData = null;
          console.log('No hay usuario autenticado');
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al verificar autenticación:', error);
        this.user = '';
        this.userData = null;
        this.isLoading = false;
      }
    });
  }

  GetUser(data: any) {
    // Cuando el login es exitoso desde el formulario
    console.log('Datos recibidos del login:', data);
    
    // Dependiendo de cómo emite el evento LoginForm:
    if (data && data.user) {
      this.user = data.user;
      this.userData = data;
    } else if (data && data.data && data.data.user) {
      this.user = data.data.user;
      this.userData = data.data;
    }
  }

  logout(): void {
    this.auth.logout();
    this.user = '';
    this.userData = null;
  }


}
