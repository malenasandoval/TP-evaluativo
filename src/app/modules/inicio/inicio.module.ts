// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMMPORTACION DE MODULO DE RUTEO DE INICIO
import { InicioRoutingModule } from './inicio-routing.module';

// COMPONENTES LOCALES
// VISTA - PÁGINA - INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './components/card/card.component';

// COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    // DECLARACION DE MODULOS PERTENECIENTES A ESTE MODULO
    CardComponent,
    InicioComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    // EXPORTACION DE MODULOS Y COMPONENTES PARA UTILIZAR EN OTROS MODULOS
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
