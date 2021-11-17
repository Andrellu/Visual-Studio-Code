import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleados.service';
import { Empleado } from '../models/Empleados';

@Component({
  selector: 'app-listadoempleados',
  templateUrl: './listadoempleados.component.html',
  styleUrls: ['./listadoempleados.component.css']
})
export class ListadoempleadosComponent implements OnInit {

  public empleados! : Array<Empleado>;

  constructor(private _service : ServiceEmpleados) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(res => {
      this.empleados =res;
    });
  }

}
