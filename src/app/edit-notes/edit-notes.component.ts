import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Nota } from '../crear-notas/notas.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {

  notaForm: FormGroup;
  notaEdit: Nota = {
    titulo: "",
      descripcion: "",
      fechaAper: new Date,
      fechaCierre: new Date,
      tipo: "",
      estado: ""
  }
  message: any = "";

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
    this.notaEdit = this.userService.nota;
    this.notaForm.patchValue(this.notaEdit);
  }

  async editNota({ value, valid }: { value: Nota, valid: boolean }) {
    console.log(value, valid)
    if (valid) {
      try {
        this.message = await this.userService.editNota(value);
        alert(this.message);
      } catch (err) {
        console.log(err);
      }
    } else {
      this.message = "Tienes campos invalidos";
      console.log(this.notaForm);
    }
  }

}