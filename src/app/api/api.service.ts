import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users: User[] = [];
  constructor() {
    this.users = JSON.parse(localStorage.users || "[]")
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

  logIn() { //login POST

  }

  logOut() { // login POST

  }
}
