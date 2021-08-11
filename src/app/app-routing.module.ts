import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'users', component: UsersComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
