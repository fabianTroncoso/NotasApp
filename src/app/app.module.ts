import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearNotasComponent } from './crear-notas/crear-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearNotasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
