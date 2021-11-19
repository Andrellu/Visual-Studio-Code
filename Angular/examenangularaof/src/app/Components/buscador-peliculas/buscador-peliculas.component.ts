import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/model/Peliculas';

@Component({
  selector: 'app-buscador-peliculas',
  templateUrl: './buscador-peliculas.component.html',
  styleUrls: ['./buscador-peliculas.component.css']
})
export class BuscadorPeliculasComponent implements OnInit {

  public peliculas! : Array<Pelicula>;
  public nombre! : string;

  constructor(private _route :ActivatedRoute, private _service : ServicePeliculas) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      this.nombre = params['nombre'];
      this.cargarPeliculas();
    });
  }

  cargarPeliculas(){
    this._service.getPeliculasNombre(this.nombre).subscribe(res => {
      this.peliculas = res;
    });
  }

}
