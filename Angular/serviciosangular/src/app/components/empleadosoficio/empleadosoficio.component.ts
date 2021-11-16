import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmpleadoDos } from '../models/EmpleadosDos';
import { ServiceEmpleadosDos } from 'src/app/services/empleadosdos.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {

  public oficios! : Array<any>;
  public empleados! : Array<EmpleadoDos>;
  @ViewChild("selectoficio") selectoficio! : ElementRef;

  constructor(private _service : ServiceEmpleadosDos) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(res => {
      this.oficios = res;
    });
  }

  cargaEmpleadosOficio(){
    var oficio = this.selectoficio.nativeElement.value;
    console.log(oficio);
    this._service.getEmpleadosOficio(oficio).subscribe(res => {
      this.empleados = res;
    });
  }

}
