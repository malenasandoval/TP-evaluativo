import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa'; //importacion de interfaz para ropa


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  cards = [
    { title: 'JORDAN RETRO 5', image: 'https://grid0.vtexassets.com/arquivos/Modelo-1.jpg', alt: 'Imagen 1' },
    { title: 'JORDAN 1', image: 'https://grid0.vtexassets.com/assets/vtex.file-manager-graphql/images/efb7aee8-53f6-4343-b8e0-4b29f0ec3de2___a84f6312f38d1fac5e63ea7bf416bd8a.jpg', alt: 'Imagen 2' },
    { title: 'PALERMO', image: 'https://grid0.vtexassets.com/assets/vtex.file-manager-graphql/images/8c4418d1-cc04-4837-ae67-0cec3e53481a___741ee2eddad882817b5fd7399b558650.jpg', alt: 'Imagen 3' },
    { title: 'SLIPSTEM', image: 'https://grid0.vtexassets.com/arquivos/Modelo-4.jpg', alt: 'Imagen 4' },
    { title: 'OZMILLEN', image: 'https://grid0.vtexassets.com/arquivos/Modelo-5.jpg', alt: 'Imagen 5' }
  ];
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
