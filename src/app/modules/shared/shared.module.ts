// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES LOCALES
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//COMPONENTES IMPORTADOS DE ANGULAR
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule } from '@angular/material/divider';
import {MatListModule } from '@angular/material/list';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';


// IMPORTACION DEL MODULO DE RUTEO // TODAS RUTAS GENERALES DE TODOS LOS MODULOS
import { AppRoutingModule } from 'src/app/app-routing.module'; // modulo de ruteo del la aplicacion -> manejo de rutas

@NgModule({
  declarations: [
    // DECLARACION DE MODULOS PERTENECIENTES A ESTE MODULO
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule
  ],
  exports: [
    // EXPORTACION DE MODULOS Y COMPONENTES PARA UTILIZAR EN OTROS MODULOS
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule
  ]
})
export class SharedModule { }
