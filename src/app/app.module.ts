import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // manejo de rutas
import { AppComponent } from './app.component'; // componente principal de la app
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // modulo de animaciones

//componentes globales
import { SharedModule } from './modules/shared/shared.module';

//Firebase -> importacion de las herramientas de la BD
import { environment } from 'src/environments/environment'; // vincula la BD con la APP
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de la información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificacion de los usuarios
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // trabaja con imagenes y archivos 

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // inicializa firebase en nuestro proyecto
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
