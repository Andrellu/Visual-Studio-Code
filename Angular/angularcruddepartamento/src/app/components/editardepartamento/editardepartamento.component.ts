import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/services/departamentos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Departamento } from 'src/app/model/Departamento';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {

  public departamento! : Departamento;
  @ViewChild("cajaNumero") cajaNumero! : ElementRef;
  @ViewChild("cajaNombre") cajaNombre! : ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad! : ElementRef;

  constructor(private _service: ServiceDepartamentos, private _router : Router, private _route :ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var num = parseInt(params['numero']);
      this.departamento = new Departamento(num, params['nombre'], params['localidad']);
 
    });
  }

  updateDepartamento():void{
    var num = this.cajaNumero.nativeElement.value;
    var nom = this.cajaNombre.nativeElement.value;
    var local = this.cajaLocalidad.nativeElement.value;
    this.departamento.nombre = nom;
    this.departamento.localidad = local
    this._service.updateDepartamento(this.departamento).subscribe(res =>{
      this._router.navigate(['/home']);
    });
  }

}
