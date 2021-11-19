import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/model/Peliculas';
import {Genero} from 'src/app/model/Genero';


@Component({
  selector: 'app-modificarpelicula',
  templateUrl: './modificarpelicula.component.html',
  styleUrls: ['./modificarpelicula.component.css']
})
export class ModificarpeliculaComponent implements OnInit {

  public generos! : Array<Genero>;
  @ViewChild("selectPelis") selectPelis! : ElementRef;
  public idPelicula! : string;

  constructor( private _router : Router,  private _service:ServicePeliculas, private _route :ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      this.idPelicula = params['idPelicula'];
    });
    this.cargarGeneros();
  }

  cargarGeneros(){
    this._service.getGeneros().subscribe(res => {
      this.generos = res;
    });
  }

  modificarPelicula(){
    var idGen = this.selectPelis.nativeElement.value;
    console.log(idGen);
    console.log(this.idPelicula);
    this._service.updateGenero(this.idPelicula, idGen).subscribe(res => {
      this._router.navigate(['/detalleGen',idGen]);
    });
  }

}
