import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: any = "";
  usuarioIncorrecto: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
  }

  async loginUser() {
    this.usuarioIncorrecto = false;
    localStorage.correo = this.loginForm.get('email')?.value;
    try {
      await this.userService.logIn(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
      this.router.navigate(["users"]);
    } catch(err) {
      this.usuarioIncorrecto = true;
      this.message = "Usuario o contraseña incorrectos";
    }
  }
}
