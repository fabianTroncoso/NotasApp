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
