import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamentos.service';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/model/Departamento';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent implements OnInit {

  @ViewChild("cajaNumero") cajaNumero! : ElementRef;
  @ViewChild("cajaNombre") cajaNombre! : ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad! : ElementRef;

  constructor(private _service: ServiceDepartamentos, private _router : Router) { }

  ngOnInit(): void {
  }

  insertarDepartamento():void{
    var numero = parseInt(this.cajaNumero.nativeElement.value);
    var nombre = this.cajaNombre.nativeElement.value;
    var localidad = this.cajaLocalidad.nativeElement.value;

    var departamento = new Departamento(numero,nombre,localidad);

    this._service.insertDepartamento(departamento).subscribe(res=>{
      this._router.navigate(['/home']);
    });
  }

}
