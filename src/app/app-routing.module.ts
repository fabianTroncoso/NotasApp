import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'users', component: UsersComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
