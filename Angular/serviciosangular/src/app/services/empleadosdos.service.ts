import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleadosDos{

    constructor(private _http: HttpClient){}

    getOficios(): Observable<any>{
        var request = "api/Empleados/oficios";
        var url = Global.urlAPIEmpleados + request;
        return this._http.get(url);
    }

    getEmpleadosOficio(oficio:string): Observable<any>{
        var request = "api/Empleados/EmpleadosOficio/" + oficio;
        var url = Global.urlAPIEmpleados + request;
        return this._http.get(url);
    }
}