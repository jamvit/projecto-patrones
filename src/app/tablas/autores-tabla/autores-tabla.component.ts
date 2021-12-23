import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/author.interface';
import { AutorService } from 'src/app/autor.service';

@Component({
  selector: 'app-autores-tabla',
  templateUrl: './autores-tabla.component.html',
  styleUrls: ['./autores-tabla.component.css'],
})
export class AutoresTablaComponent implements OnInit {
  public autoresCreados: Array<Autor> = [];
  public autorSelect: Autor = {
    libros: [],
  };

  public verLibros(autor: Autor) {
    this.autorSelect = autor;
  }

  constructor(private _autorService: AutorService) {
    this.autoresCreados = this._autorService.autores;
  }

  ngOnInit(): void {}
}
