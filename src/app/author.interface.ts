import { Libro } from './libro.interface';

export interface Autor {
  nombre?: string;
  apellido?: string;
  cedula?: string;
  fechaNacimiento?: Date;
  generoFavorito?: string;
  libros?: Array<Libro>;
}
