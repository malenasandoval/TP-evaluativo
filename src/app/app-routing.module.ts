// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES LOCALES
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

// RUTAS
// variable de tipo array que contiene todas las rutas de la pagina
const routes: Routes = [
  
  // RUTA COMUN QUE LLEVA AL UN SOLO COMPONENTE (INICIO)
  {
    path:"",component:InicioComponent
  },

  // carga perezosa -> ruta que te lleva a un modulo especifico
  // loadChildren: indica que habra una ruta hija
  // ()=> import: funcion flecha que importa desde la ruta de donde viene el modulo
  // .then: funcion asincronica del tipo promesa

  // CARGA PERESOZA DE MODULOS ESPECIFICOS
  {
    path: "",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)  // ruta vacía que utiliza loadChildren para cargar de manera perezosa el módulo Productos cuando se accede a la raíz de la app web
  },
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule) // ruta vacía que utiliza loadChildren para cargar de manera perezosa el módulo Autentificacion cuando se accede a la raíz de la app web
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
