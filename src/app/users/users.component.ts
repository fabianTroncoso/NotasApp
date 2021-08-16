import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  message: any;
  user: User = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    notas: []
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.users = await this.userService.getUsers();
    } catch(err) {

    }
  }

  async editUser(user: User) { //Funcion para editar los campos del usuario
    try {
      this.message = await this.userService.editUser(user);
      alert(this.message);
    } catch (err) {
      
    }
    console.log(this.user)
  }

  usuarioEdit(user: User) {
    this.userService.usuarioEdit(user);
  }

  async deleteUser(user: User) { //Funcion para eliminar un usuario
    const response = confirm("Are you sure to delete it?");
    if (response) {
      try {
        this.user = await this.userService.deleteUser(user);
      } catch (err) {
        
      }
    }
  }

}
