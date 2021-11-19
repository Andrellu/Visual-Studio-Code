import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/model/Peliculas';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  public idGenero! : string;
  public idNacionalidad! : string;
  public validar! : boolean;
  public peliculas! : Array<Pelicula>;
  public nacionalidad! : string;
  public genero! : string;

  constructor(private _route :ActivatedRoute, private _service:ServicePeliculas) { }

  ngOnInit(): void {
    this.validarURL();
  }

  validarURL(){
    this._route.params.subscribe((params : Params) => {
      if(params['genero']){
        this.idGenero = params['genero'];
        this.validar = true;
        console.log(this.idGenero)
        this.cargarGeneros(this.idGenero);
      }else {
        this.idNacionalidad = params['nacionalidad'];
        console.log(this.idNacionalidad);
        this.validar = false;
        this.cargarNacionalidades(this.idNacionalidad);
      }
    });
  }

  cargarGeneros(id:string){
    this._service.getPeliculasGeneroId(id).subscribe(res => {
      this.peliculas = res;
    });
  }

  cargarNacionalidades(id:string){
    this._service.getPeliculasNacionalidadId(id).subscribe(res =>{
      this.peliculas = res;
    });
  }

  cargarNacionalidad(){

  }

  cargarGenero(){
    
  }

  eliminarPelicula(event : number):void{
    console.log(event);
    // this.comics.splice(event, 1);
    this._service.deletePelicula(event).subscribe(res => {
      this.validarURL();
    });
  }

}
