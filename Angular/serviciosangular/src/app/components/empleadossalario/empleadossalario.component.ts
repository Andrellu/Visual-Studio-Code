import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleados.service';
import { Empleado } from '../models/Empleados';

@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css']
})
export class EmpleadossalarioComponent implements OnInit {

  public empleados! : Array<Empleado>;
  @ViewChild("cajasalario") cajasalario! : ElementRef

  constructor(private _service : ServiceEmpleados) { }

  ngOnInit(): void {
  }

  mostrarEmpleados(): void {
    var salario = this.cajasalario.nativeElement.value;
    if(salario == ""){
      alert("Introduce una cifra");
    } else {
      this._service.getEmpleadosSalario(salario).subscribe(res => {
        this.empleados = res;
      });
    }
  }

}
