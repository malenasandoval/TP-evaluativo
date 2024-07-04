import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa';
// importamos interfaz para animales

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PUBLICA -> TIPO ARRAY
  public info: Ropa [];

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id:"",
        nombre: "Zapatillas Mayze",
        marca: "Puma",
        precio: 10000,
        imagen: "https://cdn-images-1.medium.com/max/2000/1*pwgFvrMy1u8j6jWm_HNuqQ.jpeg",
        alt: "imagen",
      },
      {
        id:"",
        nombre: "Zapatillas Mayze",
        marca: "Puma",
        precio: 10000,
        imagen: "https://cdn-images-1.medium.com/max/2000/1*pwgFvrMy1u8j6jWm_HNuqQ.jpeg",
        alt: "imagen",
      },{
        id:"",
        nombre: "Zapatillas Mayze",
        marca: "Puma",
        precio: 10000,
        imagen: "https://cdn-images-1.medium.com/max/2000/1*pwgFvrMy1u8j6jWm_HNuqQ.jpeg",
        alt: "imagen",
      }
    
    ]
  }
}
