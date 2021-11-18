import { Component, OnInit } from '@angular/core';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Equipos } from 'src/app/models/Equipo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public equipos! : Array<Equipos>;

  constructor(private _service : ServiceApuestas) { }

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos() {
    this._service.getEquipos().subscribe(res => {
      this.equipos = res;
    });
  }

}
