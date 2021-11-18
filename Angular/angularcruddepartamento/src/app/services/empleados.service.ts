import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../model/Departamento";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http: HttpClient){}

    getEmpleadosDepartamentos(id:string): Observable<any>{
        var request = "api/Empleados/EmpleadosDepartamento/" + id;
        var url = Global.urlAPIEmpleados + request;
        return this._http.get(url);
    }

    getDetallesEmpleados(id:string): Observable<any>{
        var request =  "api/Empleados/" + id;
        var url = Global.urlAPIEmpleadosAction + request;
        return this._http.get(url);
    }

    getIncrementarSalario(idEmpleado:string, incremento: string): Observable<any>{
        var request = "api/Empleados/IncrementarSalario/" + idEmpleado+  "/" + incremento;
        var url = Global.urlAPIEmpleadosAction + request;
        console.log(url);
        var header =  new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(url, {headers: header});
    }
}