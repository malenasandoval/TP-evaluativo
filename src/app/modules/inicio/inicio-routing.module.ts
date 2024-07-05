// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES LOCALES
import { InicioComponent } from './pages/inicio/inicio.component';

//RUTAS
const routes: Routes = [
  {
    path: "",component: InicioComponent //carga el componente cuando se accede a la ruta raíz
  },
  {
    path: "inicio",component: InicioComponent //carga el componente cuando se accede a la ruta "/inicio".
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
