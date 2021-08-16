import { Nota } from "src/app/crear-notas/notas.module";

export interface User {
  name: string,
  lastName: string,
  phone: string,
  email: string,
  password: string,
  notas: Nota[]  
}
