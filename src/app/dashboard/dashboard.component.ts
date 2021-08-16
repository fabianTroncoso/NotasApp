import { Component, OnInit } from '@angular/core';
import { Nota } from '../crear-notas/notas.module';
import { User } from '../interfaces/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  notas: Nota[] = [];
  user: User = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    notas: []
  };
  notasUser: Nota[] = [];
  nombre: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getNotas();
  }

  async getUsers() {
    try {
      this.users = await this.userService.getUsers();
    } catch(err) {

    }
  }

  async getNotasUser(user: User){
    this.nombre = " de " + user.name + " " + user.lastName;
    this.notasUser = await this.userService.getNotasUser(user);
  }

  async getNotas() {
    try {
      this.notas = await this.userService.getNotes();
    } catch (err) {
      
    }
  }
}
