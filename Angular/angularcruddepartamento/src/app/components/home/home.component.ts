import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamentos.service';
import { Departamento } from 'src/app/model/Departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public departamentos! : Array<Departamento>;
  public id! : string;
  @ViewChild("btnNumero") btnNumero! : ElementRef;

  constructor(private _service: ServiceDepartamentos) { }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  cargarDepartamentos():void{
    this._service.getDepartamentos().subscribe(res => {
      this.departamentos = res;

    });
  }

  eliminarDepartamento():void{
    this.id = this.btnNumero.nativeElement.value;
    this._service.deleteDepartamento(this.id).subscribe(res =>{
      this.cargarDepartamentos();
    })
  }

}
