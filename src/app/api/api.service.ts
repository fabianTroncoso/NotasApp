import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { Nota } from '../crear-notas/notas.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: User[] = [];
  notas: Nota[] = [];
  notasUser: Nota[] = [];
  constructor() {
    this.users = JSON.parse(localStorage.users || "[]")
    this.notas = JSON.parse(localStorage.notas || "[]")
  }

  setUser(user: User) { //users POST
    this.users.push(user);
    console.log(this.users)
    localStorage.users = JSON.stringify(this.users);
  }

  getUsers(): User[] { //users get
    this.users = JSON.parse(localStorage.users)
    return this.users;
  }

  setNota(nota: Nota) { //users POST
    this.notas.push(nota);
    console.log(this.notas)
    localStorage.notas = JSON.stringify(this.notas);

    this.users = JSON.parse(localStorage.users || "[]")
    let emails = this.users.map(function(e){return e.email});
    let index = emails.indexOf(localStorage.correo);
    this.users[index].notas.push(nota);
    localStorage.users = JSON.stringify(this.users);
  }

  getNotas(): Nota[] { //users get
    this.notas = JSON.parse(localStorage.notas)
    return this.notas;
  }

  getNotasUser(user: User) {
    this.users = JSON.parse(localStorage.users || "[]");
    let usuario = this.users.find(e => e = user);
    //Array.from(this.users).contains(user);
    //asList(this.users).contains(user);
    //this.notasUser = usuario?.notas.map(function(e){return e})!;
    this.notasUser = user.notas;
    return this.notasUser;
  }

  logIn(email: string, password: string): boolean { //login POST
    this.users = JSON.parse(localStorage.users || "[]");
    let emails = this.users.map(function(e){return e.email});
    let passwords = this.users.map(function(e){return e.password});
    let pos = emails.indexOf(email);
    if(pos != -1) {
      if(passwords[pos] === password) {
        localStorage.isLogIn = 1;
        return true;
      } else {
        localStorage.isLogIn = 0;
        return false;
      }
    } else {
      localStorage.isLogIn = 0;
      return false;
    }
  }

  getIsLogin(): number {
    return parseInt(localStorage.isLogIn) || 0;
  }

  logOut() { // login POST

  }
}
