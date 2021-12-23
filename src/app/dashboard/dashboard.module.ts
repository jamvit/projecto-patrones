import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FormulariosModule } from '../formularios/formularios.module';
import { TablasModule } from '../tablas/tablas.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    FormulariosModule,
    TablasModule,
    AuthenticationModule,
  ],
})
export class DashboardModule {}
