import { Component, OnInit, ViewChild, ElementRef   } from '@angular/core';
import { Comic } from '../models/Comic';
import { ComicService } from 'src/app/services/comics.service';

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

  constructor(private _service : ComicService) {}

  ngOnInit(): void {
    this.comics = this._service.getComic();
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
