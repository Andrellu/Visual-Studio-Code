import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleados } from 'src/app/model/Empleados';
import { ServiceEmpleados } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-incrementarsalarioempleado',
  templateUrl: './incrementarsalarioempleado.component.html',
  styleUrls: ['./incrementarsalarioempleado.component.css']
})
export class IncrementarsalarioempleadoComponent implements OnInit {

  public empleado! : Empleados;
  @ViewChild("cajaIncremento") cajaIncremento! : ElementRef;

  constructor(
    private _service : ServiceEmpleados,
    private  _route: ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var empleadoId = params['idEmpleado'];
      this._service.getDetallesEmpleados(empleadoId).subscribe(res => {
        this.empleado = res;
      });
    });
  }

  getDatos(id:string){
    this._service.getDetallesEmpleados(id).subscribe(res => {
      this.empleado = res;
    });
  }

  incrementarSalario(){
        console.log("aqui");
        var id = this.empleado.idEmpleado.toString();
        var incremet= this.cajaIncremento.nativeElement.value;
        // console.log(id);
        // console.log(incremet);
        this._service.getIncrementarSalario(id, incremet).subscribe(res => {
          // this._router.navigate(['/emple',id]);
          console.log(res);
        });
  }

}
