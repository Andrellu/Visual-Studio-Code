import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http: HttpClient){}

    getEmpleadosSalario(salario : string): Observable<any>{
        var request = "api/Empleados/EmpleadosSalario/" + salario;
        var url = Global.urlAPIEmpleados + request;
        return this._http.get(url);
    }

    getEmpleados(): Observable<any>{
        var request = "api/Empleados";
        var url = Global.urlAPIEmpleados + request;
        return this._http.get(url);
    }

    findEmpleado(idEmpleado:string): Observable<any>{
        var request = "api/Empleados/" + idEmpleado;
        var url = Global.urlAPIEmpleados + request;
        return this._http.get(url);
    }

}