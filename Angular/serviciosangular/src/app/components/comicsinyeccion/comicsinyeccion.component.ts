import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comics.service';
import { Comic } from '../models/Comic';

@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',
  styleUrls: ['./comicsinyeccion.component.css'],
  providers : [ComicService]
})
export class ComicsinyeccionComponent implements OnInit {

  public comics! : Array<Comic>;

  constructor(private _service: ComicService) { }

  ngOnInit(): void {
    this.comics = this._service.getComic();
  }

}
