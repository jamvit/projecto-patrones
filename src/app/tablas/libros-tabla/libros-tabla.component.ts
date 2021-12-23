import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/libro.interface';

@Component({
  selector: 'app-libros-tabla',
  templateUrl: './libros-tabla.component.html',
  styleUrls: ['./libros-tabla.component.css'],
})
export class LibrosTablaComponent implements OnInit {
  @Input() libros?: Array<Libro> = [];

  constructor() {}

  ngOnInit(): void {}
}
