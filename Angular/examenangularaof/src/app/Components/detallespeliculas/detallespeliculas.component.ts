import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Pelicula } from 'src/app/model/Peliculas';

@Component({
  selector: 'app-detallespeliculas',
  templateUrl: './detallespeliculas.component.html',
  styleUrls: ['./detallespeliculas.component.css']
})
export class DetallespeliculasComponent implements OnInit {

  @Input() pelicula! : Pelicula;
  @Output() eliminar : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarHijo(){
    this.eliminar.emit(this.pelicula.idPelicula);
  }

}
