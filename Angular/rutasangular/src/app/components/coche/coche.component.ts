import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Coche } from '../models/Coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  @Input() coche! : Coche;
  @Output() seleccionarCoche : EventEmitter<any> = new EventEmitter();
  public mensaje! :  string;

  constructor() { 
    //this.coche = new Coche("PONTIAC", "FIREBIRD", 0, 220, 25 , false);
  }

  comprobarEstado(): boolean{
    if(this.coche.estado ==  false){
      this.coche.velocidad = 0;
      return false;
    } else {
      this.mensaje = "Coche encendido";
      return true;
    }
  }

  encenderCoche(){
    this.coche.estado = !this.coche.estado;
    this.comprobarEstado();
  }

  acelerarCoche(){
    if(this.comprobarEstado() == false){
      alert("Coche apagado");
    } else {
      this.coche.velocidad = this.coche.velocidad + this.coche.aceleracion;
      if(this.coche.velocidad > this.coche.velMaxima){
        this.coche.velocidad = this.coche.velMaxima;
      }
    }
  }

  ngOnInit(): void {
    this.comprobarEstado();
  }

  seleccionarCocheHijo(): void{
    this.seleccionarCoche.emit(this.coche);
  }

}
