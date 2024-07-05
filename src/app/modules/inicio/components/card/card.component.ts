import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa'; //importacion de interfaz para ropa

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // propiedad publica "info" -> array de objetos del tipo ropa
  public info: Ropa [];

  //inicializar la propiedad con arrays
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
