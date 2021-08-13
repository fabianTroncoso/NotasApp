import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NotasTablaComponent } from './notas-tabla/notas-tabla.component';
import { RegisterComponent } from './register/register.component';
import { CrearNotasComponent } from './crear-notas/crear-notas.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService]},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "notas-tabla", component: NotasTablaComponent, canActivate: [AuthGuardService] },
  { path: "newNotes", component: CrearNotasComponent, canActivate: [AuthGuardService] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
