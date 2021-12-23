import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/author.interface';
import { AutorService } from 'src/app/autor.service';
import { Libro } from 'src/app/libro.interface';

@Component({
  selector: 'app-libros-form',
  templateUrl: './libros-form.component.html',
  styleUrls: ['./libros-form.component.css'],
})
export class LibrosFormComponent implements OnInit {
  public autoresCreados: Array<Autor> = [];

  public generos: Array<string> = ['genero1', 'genero2', 'genero3'];
  public libro: Libro = {
    nombre: '',
    anoCreacion: 0,
    genero: '',
  };

  public autorSelect: number = -1;

  public onSubmit() {
    alert('El libro fue registrado');
    this.registrarLibroEnAutor();
  }

  private registrarLibroEnAutor() {
    this._autorServicio.autores[this.autorSelect].libros?.push({
      ...this.libro,
    });
  }

  constructor(private _autorServicio: AutorService) {
    this.autoresCreados = this._autorServicio.autores;
  }

  ngOnInit(): void {}
}
