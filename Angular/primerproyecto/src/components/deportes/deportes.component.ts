import { Component } from "@angular/core";

@Component({
    selector : "app-deportes",
    templateUrl : "./deportes.component.html"
})

export class Deportes{
    
    public sports : Array<string>;

    constructor(){
        this.sports = ["Baloncesto","Curling","Fútbol","Golf","Tenis","Padel"];
    }
}