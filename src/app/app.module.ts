// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // modulo de animaciones

// IMPORTACION DE MODULO PRINCIPAL DEL RUTEO -> TODAS LAS RUTAS GENERALES DE TODOS LOS MODULOS
import { AppRoutingModule } from './app-routing.module';

// IMPORTACION DE COMPONENTE PRINCIPAL DE LA APP WEB
import { AppComponent } from './app.component';

// COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module'; // modulo compartido, que se utiliza globalmente en la app web

// VINCULACIONES/ IMPORTACIONES CON FIREBASE
import { environment } from 'src/environments/environment'; // vincula la BD con la app web
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de la información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificacion de los usuarios
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // trabaja con imagenes y archivos 

@NgModule({
  declarations: [
    // DECLARACION DE COMPONENTE PRINCIPAL
    AppComponent
   ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    // inicializa firebase en nuestro proyecto
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
