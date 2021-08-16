import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user/user.module';
import { UserService } from '../service/user.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  @Input() userEdit: User = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    notas: []
  }
  message: any;

  constructor(private userService: UserService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      notas: new FormControl([])
    })
  }
  
  ngOnInit(): void {
    this.userEdit = this.userService.user;
    this.userForm.patchValue(this.userEdit);
  }

  async editUser({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid)
    if (valid) {
      try {
        this.message = await this.userService.editUser(value);
        alert(this.message);
      } catch (err) {
        console.log(err);
      }
    } else {
      this.message = "Tienes campos invalidos";
      console.log(this.userForm);
    }
  }

}
