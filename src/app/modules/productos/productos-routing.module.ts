// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// VISTAS DEL MÓDULO PRODUCTO
// COMPONENTES LOCALES
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { CalzadoComponent } from './pages/calzado/calzado.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';

//RUTAS
const routes: Routes = [
  {
    path:"indumentaria",component:IndumentariaComponent //ruta indumentaria que carga el componente IndumentariaComponent cuando se navega a esta
  },
  {
    path:"calzado",component:CalzadoComponent // ruta calzado que carga el componente CalzadoComponent cuando se navega a esta
  },
  {
    path:"accesorios",component:AccesoriosComponent // ruta accesorios que carga el componente AccesoriosComponent cuando se navega a esta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
