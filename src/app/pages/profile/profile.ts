import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';


@Component({
  selector: 'app-profile',
  imports: [LoginForm],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

}
