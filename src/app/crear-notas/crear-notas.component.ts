import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Nota } from './notas.module';
import { FormsModule,FormGroup, FormControl }   from '@angular/forms';

@Component({
  selector: 'app-crear-notas',
  templateUrl: './crear-notas.component.html',
  styleUrls: ['./crear-notas.component.css'],
  exportAs: 'ngForm'
})
export class CrearNotasComponent implements OnInit {

  constructor() { }
  notas: Nota[]=[]
  nota: Nota={
    titulo: "",
    descripcion: "",
    fechaAper: new Date(),
    tipo: "",
    estado:""
  }

  ngOnInit(): void {
  }

  onSubmit(fn: NgForm): void { 

    const { titulo, descripcion, fechaAper, tipo, estado} = fn.value
    this.nota={
      titulo: titulo,
      descripcion: descripcion,
      fechaAper: fechaAper,
      tipo: tipo,
      estado: estado
    }
    this.notas.push(this.nota)
  }
}
