import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../service/api';
import { Auth } from '../../service/auth';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  @Output() Logeado = new EventEmitter<string>();

  errorMessage : string = "";

  success : string = "void";

  loginForm : FormGroup;
  usuario : FormControl;
  password : FormControl;

  constructor(private apiService : Api, public authService: Auth){
    this.usuario = new FormControl('', Validators.required)
    this.password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)])

    this.loginForm = new FormGroup({
      usuario : this.usuario,
      password : this.password

    })
  }

  Login(){
    const usuario: string = this.loginForm.value["usuario"];
    const password: string = this.loginForm.value["password"];
    this.authService.login(usuario, password).subscribe({
      next: res => {
        console.log(res);
        this.success = "y";
        this.errorMessage = ''; // limpiar error si login OK
        this.Logeado.emit(res)
      },
      error: err => {
        console.error(err);
        this.success = "n";
        // Aquí definimos el mensaje que se mostrará
        this.errorMessage = 'Credenciales inválidas';
      }
    });
    console.log(usuario);
    console.log(password);
    this.loginForm.reset();
  }
}

