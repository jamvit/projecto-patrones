import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresTablaComponent } from './autores-tabla/autores-tabla.component';
import { LibrosTablaComponent } from './libros-tabla/libros-tabla.component';

@NgModule({
  declarations: [AutoresTablaComponent, LibrosTablaComponent],
  exports: [AutoresTablaComponent, LibrosTablaComponent],
  imports: [CommonModule],
})
export class TablasModule {}
