import { Component, OnInit } from '@angular/core';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Apuestas } from 'src/app/models/Apuesta';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  public apuestas! : Array<Apuestas>;

  constructor(private _service : ServiceApuestas) { }

  ngOnInit(): void {
    this.cargarApuestas();
  }

  cargarApuestas(){
    this._service.getApuestas().subscribe(res => {
      this.apuestas = res;
    });
  }

  eliminarApuesta(id:number){
    this._service.deleteApuesta(id).subscribe(res =>{
      this.cargarApuestas();
    });
  }

}
