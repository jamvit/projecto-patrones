import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { LibrosFormComponent } from './libros-form/libros-form.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoresFormComponent, LibrosFormComponent],
  exports: [AutoresFormComponent, LibrosFormComponent],
  imports: [CommonModule, FormsModule],
})
export class FormulariosModule {}
