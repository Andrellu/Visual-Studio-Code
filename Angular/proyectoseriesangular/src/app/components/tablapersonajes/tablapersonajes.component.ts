import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/series.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Personajes } from 'src/app/model/Personajes';

@Component({
  selector: 'app-tablapersonajes',
  templateUrl: './tablapersonajes.component.html',
  styleUrls: ['./tablapersonajes.component.css']
})
export class TablapersonajesComponent implements OnInit {

  public idSerie! : string;
  public personajes! : Array<Personajes>;

  constructor(private _route :ActivatedRoute, private _service : ServiceSeries, private _router : Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      this.idSerie = params['idSerie'];
      console.log(this.idSerie);
      this.cargarTabla();
    });
  }

  cargarTabla(){
    this._service.getPersonajesSerieId(this.idSerie).subscribe(res => {
      this.personajes = res;
    });
  }

}
