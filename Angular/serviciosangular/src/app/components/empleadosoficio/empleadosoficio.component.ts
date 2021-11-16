import { Component, OnInit } from '@angular/core';
import { EmpleadoDos } from '../models/EmpleadosDos';
import { ServiceEmpleadosDos } from 'src/app/services/empleadosdos.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {

  public oficios! : Array<any>;

  constructor(private _service : ServiceEmpleadosDos) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(res => {
      this.oficios = res;
    });
  }

}
