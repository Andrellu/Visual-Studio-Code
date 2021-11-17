import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { Series } from 'src/app/model/Series';
import { Personajes } from 'src/app/model/Personajes';
import { Router } from '@angular/router';
import { ServiceSeries } from 'src/app/services/series.service';

@Component({
  selector: 'app-insertarpersonajes',
  templateUrl: './insertarpersonajes.component.html',
  styleUrls: ['./insertarpersonajes.component.css']
})
export class InsertarpersonajesComponent implements OnInit {

  public series! : Array<Series>;
  public personaje! : Personajes;
  @ViewChild("cajaNombre") cajaNombre! : ElementRef;
  @ViewChild("cajaImagen") cajaImagen! : ElementRef;
  @ViewChild("cajaSelect") cajaSelect! : ElementRef;

  constructor(private _service : ServiceSeries, private _router : Router) { }

  ngOnInit(): void {
    this.cargarSeries();
  }

  cargarSeries(){
    this._service.getSeries().subscribe(res => {
      this.series = res;
    });
  }

  insertarPersonaje(){
    var nom = this.cajaNombre.nativeElement.value;
    var img = this.cajaImagen.nativeElement.value;
    var serie = parseInt(this.cajaSelect.nativeElement.value);

    this.personaje = new Personajes(0, nom, img, serie);
    //console.log(this.personaje);
    this._service.insertPersonaje(this.personaje).subscribe(res => {
      this._router.navigate(['/tablapersonajes',serie]);
    });
  }
}
