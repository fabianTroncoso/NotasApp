import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Nota } from '../crear-notas/notas.module';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  message: any = ""
  constructor(private userService: UserService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])

    })
  }

  ngOnInit(): void {
  }

  async register({ value, valid }: { value: User, valid: boolean }) {
  console.log(value, valid)
  if (valid) {
    try {
      this.message = await this.userService.registerUser(value);
      console.log(typeof this.message, this.message);
    } catch (err) {
      console.log(err);
    }
    this.userForm.reset();
  } else {
    this.message = "Tienes campos invalidos";
    console.log(this.userForm);
  }
}
}
