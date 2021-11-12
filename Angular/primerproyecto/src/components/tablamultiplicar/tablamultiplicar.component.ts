import { Component, ViewChild, ElementRef  } from "@angular/core";

@Component({
    selector : "app-tabla-multiplicar",
    templateUrl : "./tablamultiplicar.component.html"
})

export class TablaMultiplicar{
    @ViewChild("cajaNumero") cajaNumero : ElementRef;
    public num : number;
    public numros : Array<number>;

    constructor(){
        this.cajaNumero = new ElementRef(0);
        this.numros = new Array<number>();
        this.num = 0;
    }

    setNumero(){
        this.num = parseInt(this.cajaNumero.nativeElement.value);
        this.numros = [];
        for(var i = 0; i <= 10; i++){
            var opera = i * this.num;
            this.numros.push(opera);
        }
    }
}