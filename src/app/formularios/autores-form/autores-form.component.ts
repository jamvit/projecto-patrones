import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/author.interface';
import { AutorService } from 'src/app/autor.service';

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css'],
})
export class AutoresFormComponent implements OnInit {
  public autor: Autor = {
    nombre: '',
    apellido: '',
    cedula: '',
    fechaNacimiento: new Date(),
    generoFavorito: '',
    libros: [],
  };

  public generos: Array<string> = ['genero1', 'genero2', 'genero3'];

  public onSubmit() {
    alert('Autor agregado exitosamente');
    this._autorServicio.autores.push({ ...this.autor });
    this.resetAutor();
  }

  private resetAutor() {
    this.autor = {
      nombre: '',
      apellido: '',
      cedula: '',
      fechaNacimiento: new Date(),
      generoFavorito: '',
      libros: [],
    };
  }

  constructor(private _autorServicio: AutorService) {}

  ngOnInit(): void {}
}
