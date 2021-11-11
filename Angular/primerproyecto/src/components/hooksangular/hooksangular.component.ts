import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector : "hook-angular",
    templateUrl : "./hooksangular.components.html",

})

export class HooksAngular implements OnInit{

    public mensaje : string;

    constructor(){
        console.log("Constructor, yo voy primero");
        this.mensaje = "Hola soy un alumno";
    }

    ngOnInit(): void {
        console.log("ngOnInit(): Ejecutando despues del costructor.");
    }

    ngDoCheck(){
        console.log("ngDoCheck: La vista a cambiado.");
    }

    cambiarMensaje(){
        if(this.mensaje == "Hola soy un alumno"){
            this.mensaje = "Hola soy Andrés";
        } else {
            this.mensaje = "Hola soy un alumno";
        }
    }

    ngOnDestroy(){

    }
}