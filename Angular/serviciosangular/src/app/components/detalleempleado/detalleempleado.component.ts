import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleados.service';
import { Empleado } from '../models/Empleados';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {

  public empleado! : Empleado;

  constructor(private _service : ServiceEmpleados, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var id = params['idEmpleado'];
      this.mostrarEmpleado(id);
    });
  }

  mostrarEmpleado(idEmpleado:string): void{
    this._service.findEmpleado(idEmpleado).subscribe(res => {
      this.empleado = res;
    });
  }

}
