import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamentos.service';
import { Departamento } from 'src/app/model/Departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public departamentos! : Array<Departamento>;

  constructor(private _service: ServiceDepartamentos) { }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  cargarDepartamentos():void{
    this._service.getDepartamentos().subscribe(res => {
      this.departamentos = res;

    });
  }

  eliminarDepartamento(id:number):void{
    this._service.deleteDepartamento(id).subscribe(res =>{
      this.cargarDepartamentos();
    })
  }

}
