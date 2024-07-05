import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { CalzadoComponent } from './pages/calzado/calzado.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';


@NgModule({
  declarations: [
    IndumentariaComponent,
    CalzadoComponent,
    AccesoriosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
