import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Pelicula } from 'src/app/model/Peliculas';
import {Nacionalidad} from 'src/app/model/Nacionalidades';
import {Genero} from 'src/app/model/Genero';
import { ServicePeliculas } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detallespeliculas',
  templateUrl: './detallespeliculas.component.html',
  styleUrls: ['./detallespeliculas.component.css']
})
export class DetallespeliculasComponent implements OnInit {

  @Input() pelicula! : Pelicula;
  @Output() eliminar : EventEmitter<any> = new EventEmitter();
  public nacionalidad! :Nacionalidad;
  public genero! : Genero;

  constructor( private _service:ServicePeliculas) { }

  ngOnInit(): void {
    this.cargarNacionalidad();
    this.cargarGenero();
  }

  eliminarHijo(){
    this.eliminar.emit(this.pelicula.idPelicula);
  }

  cargarNacionalidad(){
      this._service.getNacionalidadId(this.pelicula.idNacionalidad).subscribe(res => {
        this.nacionalidad = res;
      });
  }

  cargarGenero(){
      this._service.getGeneroId(this.pelicula.idGenero).subscribe(res => {
        this.genero = res;
      });
  }
}
