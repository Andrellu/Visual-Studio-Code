import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Genero } from 'src/app/model/Genero';
import { Nacionalidad } from 'src/app/model/Nacionalidades';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public nacionalidades! : Array<Nacionalidad>;
  public generos! : Array<Genero>;
  @ViewChild('cajaBuscar') cajaBuscar! : ElementRef;

  constructor( private _router : Router, private _service:ServicePeliculas) { }

  ngOnInit(): void {
    this.cargarNacionalidades();
    this.cargarGeneros();
  }
  cargarNacionalidades(){
    this._service.getNacionalidades().subscribe(res => {
      this.nacionalidades = res;
    });

  }

  cargarGeneros(){
    this._service.getGeneros().subscribe(res => {
      this.generos = res;
    });
  }

  buscarJugadores() {
    var nom = this.cajaBuscar.nativeElement.value;
    console.log(nom);
    this._router.navigate(['/buscar',nom]);
  }

}
