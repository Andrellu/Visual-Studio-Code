import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Series } from 'src/app/model/Series';
import { Personajes } from 'src/app/model/Personajes';
import { Router } from '@angular/router';
import { ServiceSeries } from 'src/app/services/series.service';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {

  public series! : Array<Series>;
  public personajes! : Array<Personajes>;
  @ViewChild("selectSeries") selectSeries! : ElementRef;
  @ViewChild("selectPersonaje") selectPersonaje! : ElementRef;

  constructor(private _service : ServiceSeries, private _router : Router) { }

  ngOnInit(): void {
    this.cargarSeries();
    this.cargarPersonajes();
  }

  cargarPersonajes(){
    this._service.getPersonajes().subscribe(res => {
      this.personajes = res;
    });
  }

  cargarSeries(){
    this._service.getSeries().subscribe(res => {
      this.series = res;
    });
  }

  modificarPersonaje(){
    var idSerie = this.selectSeries.nativeElement.value;
    var idPersonaje = this.selectPersonaje.nativeElement.value;
    this._service.updatePersonaje(idPersonaje, idSerie).subscribe(res => {
      this._router.navigate(['/tablapersonajes',idSerie]);
    });
  }

}
