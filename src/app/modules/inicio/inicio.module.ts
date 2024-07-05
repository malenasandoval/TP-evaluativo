import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';// modulo de ruteo del la aplicacion -> manejo de rutas

// COMPONENTES LOCALES
import { InicioComponent } from './pages/inicio/inicio.component'; // vista principal
import { CardComponent } from './components/card/card.component'; //  componente utilizado dentro de la sección "Inicio" para mostrar tarjetas de contenid

// COMPONENTES QUE IMPORTAMOS DE A MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CardComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
