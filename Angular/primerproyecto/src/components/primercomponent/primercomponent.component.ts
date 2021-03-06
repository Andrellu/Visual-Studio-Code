import { Component } from "@angular/core";

@Component({
    // INDICAMOS EL NOMBRE DE NUESTRO COMPONENT
    selector : "primer-component",
    templateUrl : "./primercomponent.component.html",
    styleUrls : ["./primercomponent.component.css"]
})

export class PrimerComponent{
    public titulo :  string;
    public descripcion : String;
    public anyo : number;
    public ocultar : boolean;

    constructor() {
        this.titulo = "Hoy es jueves de Angular";
        this.descripcion = "Aprendiendo angular a tope";
        this.anyo = 2021;
        this.ocultar = false;
    }

    ocultarComponente(){
        if(this.ocultar == false){
            this.ocultar =  true;
        } else {
            this.ocultar = false;
        }
    }
}