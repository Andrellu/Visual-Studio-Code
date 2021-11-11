import { Component } from "@angular/core";

@Component({
    selector : "app-formulario-binding-model",
    templateUrl : "./formulariobindingmodel.component.html"
})

export class Formulariobindingmodel{
    public user : any;
    public mensaje  : string;

    constructor() {
        this.user = {
            nombre : "",
            apellidos : "",
            edad : 0
        };
        this.mensaje = "";
    }

    getFormulario(): void{
        this.mensaje = "Datos Recibidos!!!"
    }
}