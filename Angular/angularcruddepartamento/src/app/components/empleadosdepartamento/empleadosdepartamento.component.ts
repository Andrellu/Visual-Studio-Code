import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleados.service';
import { Empleados } from 'src/app/model/Empleados';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-empleadosdepartamento',
  templateUrl: './empleadosdepartamento.component.html',
  styleUrls: ['./empleadosdepartamento.component.css']
})
export class EmpleadosdepartamentoComponent implements OnInit {

  public empleados! : Array<Empleados>;

  constructor(private _service: ServiceEmpleados,private  _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) => {
      var idDepartamento = params['idDepartamento'];
      this._service.getEmpleadosDepartamentos(idDepartamento).subscribe(res => {
        this.empleados = res;
      });
    })
  }

}
