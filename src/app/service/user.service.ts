import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from '../interfaces/user/user.module';
import { Nota } from '../crear-notas/notas.module';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  nota: Nota = {
    titulo: "",
    descripcion: "",
    fechaAper: new Date,
    fechaCierre: new Date,
    tipo: "",
    estado:""
  };
  notasUser: Nota[] = [];

  constructor(private apiServices: ApiService) { }
  registerNote(nota: Nota) {
    return new Promise((resolve, reject) => {
      if (nota.descripcion != null) {
        this.apiServices.setNota(nota)
        resolve("Exito en la operacion, usuario insertado correctamente")
      } else {
        reject("Valor del email no valido")

      }
    })
  }
  registerUser(user: User) {
    return new Promise((resolve, reject) => {
      if (user.email != null) {
        this.apiServices.setUser(user)
        resolve("Exito en la operacion, usuario insertado correctamente")
      } else {
        reject("Valor del email no valido")

      }
    })
  }
  getUsers() {
    return new Promise<User[]>((resolve, reject) => {
      this.users = this.apiServices.getUsers();
      resolve(this.users);
    })
  }

  usuarioEdit(user: User) {
    this.user = user;
  }

  notaEdit(nota: Nota) {
    this.nota = nota;
  }
  
  getNotes(){
    return new Promise<Nota[]>((resolve, reject) => {
      this.notas = this.apiServices.getNotas();
      resolve(this.notas);
    })
  }

  getNotasUser(user: User) {
    return new Promise<Nota[]>((resolve, reject) => {
      this.notasUser = this.apiServices.getNotasUser(user);
      resolve(this.notasUser);
    })
  }

  editUser(user: User) {
    return new Promise((resolve, reject) => {
      this.apiServices.editUser(user);
      resolve("Datos actualizados");
    })
  }
  editNota(nota: Nota) {
    return new Promise((resolve, reject) => {
      this.apiServices.editNota(nota);
      resolve("Datos actualizados");
    })
  }

  deleteUser(user: User) {
    return new Promise<User>((resolve, reject) => {
      this.user = this.apiServices.deleteUser(user);
      resolve(this.user);
    })
  }
  deleteNota(nota: Nota) {
    return new Promise<Nota>((resolve, reject) => {
      this.apiServices.deleteNota(nota);
      resolve(this.nota);
    })
  }

  logIn(email: string, password: string){
    return new Promise((resolve, reject)=>{
      let isUser = this.apiServices.logIn(email, password);
      if(isUser) {
        resolve(true);
      } else {
        reject(false);
      }
    })
  }

  isLogin() {
    return this.apiServices.getIsLogin();
  }
}
