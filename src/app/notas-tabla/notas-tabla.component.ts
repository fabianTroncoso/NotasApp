import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit, Input  } from '@angular/core';
import { Nota } from '../crear-notas/notas.module';
import { UserService } from '../service/user.service';
//import { crear-notas} from '../crear-notas/crear-notas.component'
@Component({
  selector: 'app-notas-tabla',
  templateUrl: './notas-tabla.component.html',
  styleUrls: ['./notas-tabla.component.css']
})
export class NotasTablaComponent implements OnInit {
  notas : Nota[] = [];
  nota: Nota = {
    titulo: "",
    descripcion: "",
    fechaAper: new Date,
    fechaCierre: new Date,
    tipo: "",
    estado:""
  };
  message: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getNotas();
  }
  async getNotas(){
    try {
      this.notas = await this.userService.getNotes();
    } catch (er) {
      
    }
  }

  async editUser(nota: Nota) { //Funcion para editar los campos de la nota
    try {
      this.message = await this.userService.editNota(nota);
      alert(this.message);
    } catch (err) {
      
    }
    console.log(this.nota)
  }

  notaEdit(nota: Nota) {
    this.userService.notaEdit(nota);
  }

  async deleteNota(nota: Nota) { //Funcion para eliminar una nota
    const response = confirm("Are you sure to delete it?");
    if (response) {
      try {
        this.nota = await this.userService.deleteNota(nota);
      } catch (err) {
        
      }
    }
  }

}
