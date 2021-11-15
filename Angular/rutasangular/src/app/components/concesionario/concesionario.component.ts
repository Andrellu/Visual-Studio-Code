import { Component, OnInit } from '@angular/core';
import { Coche } from '../models/Coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {

  public coches : Array<Coche>;
  public mensaje! : string;

  constructor() { 
    this.coches = [
      new Coche ("Ford", "Mustang", 0, 320, 30, false),
      new Coche("Nissan", "X-TRAIL", 0, 180, 20, false),
      new Coche("Ford", "Fiesta", 0, 220, 10, false),
      new Coche("Nissan", "Juke", 0, 300, 35, false),
    ];
  }

  seleccionarCochePadre(event : Coche) : void {
    this.mensaje = "Modelo : " + event.modelo +  ", Modelo : " + event.marca + ", Velocidad Máxima : " +  event.velMaxima;
  }

  ngOnInit(): void {
  }

}
