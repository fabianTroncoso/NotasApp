import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Nota } from './notas.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../interfaces/user/user.module';

@Component({
  selector: 'app-crear-notas',
  templateUrl: './crear-notas.component.html',
  styleUrls: ['./crear-notas.component.css'],
  exportAs: 'ngForm'
})
export class CrearNotasComponent implements OnInit {
  notaForm: FormGroup;
  message: any = ""
  users: User[]=[]

  constructor(private userService: UserService) { 
      this.notaForm = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),
      fechaAper: new FormControl(),
      fechaCierre: new FormControl(),
      tipo: new FormControl(),
      estado: new FormControl()
    })
  }


  ngOnInit(): void {
  }



  async nuevaNota({ value, valid }: { value: Nota, valid: boolean }) {

    console.log(value, valid)
    if (valid) {
      try {
        this.message = await this.userService.registerNote(value);
        console.log(typeof this.message, this.message);
      } catch (err) {
        console.log(err);
      }
      this.notaForm.reset();
    } else {
      this.message = "Tienes campos invalidos";
      console.log(this.notaForm);
    }
  }
  
}
