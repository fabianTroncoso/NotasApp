import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit, Input  } from '@angular/core';
import { Nota } from '../crear-notas/notas.module';
import { UserService } from '../service/user.service';
import { User } from '../interfaces/user/user.module';
//import { crear-notas} from '../crear-notas/crear-notas.component'
@Component({
  selector: 'app-notas-tabla',
  templateUrl: './notas-tabla.component.html',
  styleUrls: ['./notas-tabla.component.css']
})
export class NotasTablaComponent implements OnInit {
  notas : Nota[] = [];
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
}


/*export class UsersTableComponent implements OnInit {
  @Input() users: User[] =[];
  @Input() titleTabla: string =''
  constructor() { 
  }

  ngOnInit(): void {
  }

}*/