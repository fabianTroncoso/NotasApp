import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from '../interfaces/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  constructor(private apiServices: ApiService) { }

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
}
