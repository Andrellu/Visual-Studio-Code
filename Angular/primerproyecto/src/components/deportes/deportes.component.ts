import { Component } from "@angular/core";

@Component({
    selector : "app-deportes",
    templateUrl : "./deportes.component.html",
    styleUrls : ["./deportes.component.css"]
})

export class Deportes{
    
    public sports : Array<string>;
    public numeros : Array<number>;

    constructor(){
        this.sports = ["Baloncesto","Curling","Fútbol","Golf","Tenis","Padel"];
        //this.sports = ["Baloncesto","Curling","Fútbol","Golf","Tenis","Padel","Volley-Ball"];
        this.numeros = [1,2,3,4,5,6,7,8,9,10];
    }
}