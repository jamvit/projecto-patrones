import { Injectable } from '@angular/core';
import { Autor } from './author.interface';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  public autores: Array<Autor> = [];

  constructor() {}
}
