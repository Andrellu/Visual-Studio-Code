import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Comic } from '../models/Comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  @Input() comic! : Comic;
  @Input() index! : number;
  @Output() favorito : EventEmitter<any> = new EventEmitter();
  @Output() modificar : EventEmitter<any> = new EventEmitter();
  @Output() eliminar : EventEmitter<any> = new EventEmitter();


  constructor() {
   }

  ngOnInit(): void {
    //console.log(this.comic);
  }

  favoritoHijo(){
    this.favorito.emit(this.comic);
  }

  modificarHijo(){
    this.modificar.emit(this.index);
  }

  eliminarHijo(){
    this.eliminar.emit(this.index);
  }

}
