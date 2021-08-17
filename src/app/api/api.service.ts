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
  user: User = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    notas: []
  };
  nota: Nota = {
    titulo: "",
      descripcion: "",
      fechaAper: new Date,
      fechaCierre: new Date,
      tipo: "",
      estado: ""
  }
  constructor() {
    this.users = JSON.parse(localStorage.users || "[]")
    this.notas = JSON.parse(localStorage.notas || "[]")
  }
  
  setNota(nota: Nota) { //users POST
    this.notas.push(nota);
    console.log(this.notas)
    localStorage.notas = JSON.stringify(this.notas);
    let emails = this.users.map(function(e){return e.email}); 
    let posUser=emails.indexOf(localStorage.correo)
    console.log("posicion de usuario:"+posUser)
   // localStorage.users[posUser].notas.push(nota)
    this.users[posUser].notas.push(nota)

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

  getNotas(): Nota[] { //users get
    this.notas = JSON.parse(localStorage.notas)
    return this.notas;
  }

  getNotasUser(user: User) {
    this.users = JSON.parse(localStorage.users || "[]");
    let usuario = this.users.find(e => e = user);
    this.notasUser = user.notas;
    return this.notasUser;
  }

  editUser(user: User) {
    this.users = JSON.parse(localStorage.users || "[]");
    for (let i = 0; i < this.users.length; i++) {
      if(user.email == this.users[i].email) {
        this.users[i].name = user.name;
        this.users[i].lastName = user.lastName;
        this.users[i].phone = user.phone;
        this.users[i].password = user.password;
        this.users[i].notas = user.notas;
      }
    }
    localStorage.users = JSON.stringify(this.users);
  }
  editNota(nota: Nota) {
    this.notas = JSON.parse(localStorage.notas || "[]");
    for (let i = 0; i < this.notas.length; i++) {
      if(nota.titulo == this.notas[i].titulo) {
        this.notas[i].titulo = nota.titulo;
        this.notas[i].descripcion = nota.descripcion;
        this.notas[i].fechaAper = nota.fechaAper;
        this.notas[i].fechaCierre = nota.fechaCierre;
        this.notas[i].tipo = nota.tipo;
        this.notas[i].estado = nota.estado;
      }
    }
    localStorage.notas = JSON.stringify(this.notas);
  }
  
  deleteUser(user: User) {
    this.user = user;
    for(let i = 0; i < this.users.length; i++) {
      if (this.user == this.users[i]) {
        this.users.splice(i,1);
        localStorage.users = JSON.stringify(this.users);
      }
    }
    return this.user
  }
  deleteNota(nota: Nota) {
    this.nota = nota;
    for(let i = 0; i < this.notas.length; i++) {
      if (this.nota == this.notas[i]) {
        this.notas.splice(i,1);
        localStorage.notas = JSON.stringify(this.notas);
      }
    }
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
