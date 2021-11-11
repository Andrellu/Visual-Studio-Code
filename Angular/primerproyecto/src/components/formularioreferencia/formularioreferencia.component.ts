import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector : "app-formulario-referencia",
    templateUrl : "./formularioreferencia.component.html"
})

export class FormularioReferencia{

    @ViewChild("cajaNumUno") cajanumUno : ElementRef;
    @ViewChild("cajaNumDos") cajanumDos : ElementRef;
    public suma : number;

    constructor(){
        this.suma = 0;
        this.cajanumUno = new ElementRef(0);
        this.cajanumDos = new ElementRef(0);
    }

    sumarNumeros(){
        var numUno = this.cajanumUno.nativeElement.value;
        var numDos = this.cajanumDos.nativeElement.value;
        this.suma = parseInt(numUno) + parseInt(numDos);
    }
}