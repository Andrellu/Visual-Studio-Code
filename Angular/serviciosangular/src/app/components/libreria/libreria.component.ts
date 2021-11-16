import { Component, OnInit, ViewChild, ElementRef   } from '@angular/core';
import { Comic } from '../models/Comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  public comics! : Array<Comic>;
  @ViewChild("cajaNombre") cajaNombre! : ElementRef;
  @ViewChild("cajaImagen") cajaImagen! : ElementRef;
  @ViewChild("cajaDescripcion") cajaDescripcion! : ElementRef;
  public comicFav! : Comic;

  constructor() {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ];
  }

  ngOnInit(): void {
  }

  insertarComic(){
    var titu = this.cajaNombre.nativeElement.value;
    var img = this.cajaImagen.nativeElement.value;
    var descrip = this.cajaDescripcion.nativeElement.value;

    var comic = new Comic(titu, img, descrip);
    this.comics.push(comic);
  }

  favorito(event : Comic) : void {
    var nom = event.nombre;
    var img = event.imagen;
    var desc = event.descripcion;
    //console.log(nom + "/" + img + "/" + desc);
    this.comicFav = event;
  }

  modificarComic(event : number): void {
    var titu = this.cajaNombre.nativeElement.value;
    var img = this.cajaImagen.nativeElement.value;
    var descrip = this.cajaDescripcion.nativeElement.value;
    this.comics[event] = new Comic(titu,img, descrip);
    // for(var i = 0; i < this.comics.length; i++){
    //   if(event == i){
    //     //console.log(this.comics[i].nombre + "==" +  event.nombre);
    //     this.comics[i].nombre = titu;
    //     this.comics[i].imagen = img;
    //     this.comics[i].descripcion = descrip;
    //   }
    // }
  }

  eliminarComic(event : number):void{
    console.log(event);
    this.comics.splice(event, 1);
  }
}
