import { Component } from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pub',
  imports: [
    FormsModule
  ],
  templateUrl: './pub.html',
  styleUrl: './pub.css'
})
export class Pub {
  protected title = 'mini-bank';

  username: string = '';
  password: string = '';
  message: string = '';
  private userConfirm = "admin"
  private passwordConfirm = "123"

  constructor(private router: Router) {}

  login() {
    if (this.username === this.userConfirm && this.password === this.passwordConfirm) {
      this.router.navigate(['/main']);
      console.log('Redirección exitosa');
    } else {
      this.message = "Usuario o contraseña incorrecto!";
    }
  }
}
