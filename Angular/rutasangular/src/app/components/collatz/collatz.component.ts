import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {

  public numero : number;
  public numeros : Array<number> = new Array();

  constructor(private _activeRoute: ActivatedRoute) { 
    this.numero = 0;
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params : Params) => {
      if(params['numero'] != null){
        this.numero = parseInt(params['numero']);
        this.calcularOperaciones();
      }
    })
  }

  calcularOperaciones(){
    console.log(this.numero);

    this.numeros = [];
    while(this.numero!=1){
      if(this.numero % 2 == 0){
        this.numero = this.numero / 2;
      }else{
        this.numero = (this.numero*3)+1;
      }
      this.numeros.push(this.numero);
    }
  }
}
