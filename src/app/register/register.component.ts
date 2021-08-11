import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  register(fu: NgForm) {
    this.user = fu.value;
    console.log(this.user)
  }
}
