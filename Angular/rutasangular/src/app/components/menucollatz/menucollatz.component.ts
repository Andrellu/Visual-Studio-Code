import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})

export class MenucollatzComponent implements OnInit {

  public numeros : Array<number>= new Array();

  constructor() { }

  ngOnInit(): void {
    this.generarNumeros();
  }

  generarNumeros(){
    //this.numeros = new Array();
    for(var i = 0; i < 11; i++){
      var numRandom = Math.floor(Math.random()*100);
      //console.log(numRandom);
      this.numeros.push(numRandom);
    }
    //console.log(this.numeros);
  }
}
