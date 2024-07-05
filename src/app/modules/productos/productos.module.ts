// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTAMOS MODULO DE RUTEO DE PRODUCTOS
import { ProductosRoutingModule } from './productos-routing.module';

// COMPONENTES LOCALES
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { CalzadoComponent } from './pages/calzado/calzado.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';

@NgModule({
  declarations: [
    // DECLARACION DE MODULOS PERTENECIENTES A ESTE MODULO
    IndumentariaComponent,
    CalzadoComponent,
    AccesoriosComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
