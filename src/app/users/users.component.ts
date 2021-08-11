import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

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

}
