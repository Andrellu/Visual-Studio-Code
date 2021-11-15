import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../models/Comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  @Input() comic! : Comic;

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.comic);
  }

}
