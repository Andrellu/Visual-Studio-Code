import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/model/Series';
import { ServiceSeries } from 'src/app/services/series.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detallesserie',
  templateUrl: './detallesserie.component.html',
  styleUrls: ['./detallesserie.component.css']
})
export class DetallesserieComponent implements OnInit {

  public serie! : Series;
  public idSerie! : number;

  constructor(private _route :ActivatedRoute, private _service : ServiceSeries, private _router : Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var num = parseInt(params['idSerie']);
      this.idSerie = num;
      console.log(this.idSerie);
      this.buscarSerie();
    });
  }

  buscarSerie(){
    this._service.getSerieId(this.idSerie).subscribe(res => {
      this.serie = res;
    });
  }

}
