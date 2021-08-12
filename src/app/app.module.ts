import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
<<<<<<< HEAD
import { NotasTablaComponent } from './notas-tabla/notas-tabla.component';
=======
import { CrearNotasComponent } from './crear-notas/crear-notas.component';
>>>>>>> 4157e0271ee3654235650d765d4ed366b7ace6a9
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
<<<<<<< HEAD
    RegisterComponent,
    NotasTablaComponent
=======
    CrearNotasComponent,
    RegisterComponent
>>>>>>> 4157e0271ee3654235650d765d4ed366b7ace6a9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
