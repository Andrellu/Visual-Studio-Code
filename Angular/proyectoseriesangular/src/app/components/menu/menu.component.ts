import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/model/Series';
import { ServiceSeries } from 'src/app/services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series! : Array<Series>;

  constructor(private _service : ServiceSeries) { }

  ngOnInit(): void {
    this.cargarSeries();
  }

  cargarSeries(){
    this._service.getSeries().subscribe(res => {
      this.series = res;
    });
  }
}
