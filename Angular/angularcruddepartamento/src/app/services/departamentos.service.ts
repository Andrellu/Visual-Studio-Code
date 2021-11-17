import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../model/Departamento";

@Injectable()
export class ServiceDepartamentos{
    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<any>{
        var request = "api/Departamentos";
        var url = Global.urlAPIDepartamentos + request;
        return this._http.get(url);
    }

    insertDepartamento(departamento: Departamento): Observable<any>{
        var request = "api/Departamentos";
        var url = Global.urlAPIDepartamentos + request;
        // Convertimos el objeto a un JSON
        var json = JSON.stringify(departamento);
        // Necesario para que lo haga en cualquier caso
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(url, json, {headers:header});
    }

    updateDepartamento(departamento: Departamento): Observable<any>{
        var request = "api/Departamentos";
        var url = Global.urlAPIDepartamentos + request;
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(url,json,{headers:header});
    }

    deleteDepartamento(id:string): Observable<any>{
        var request = "api/Departamentos" + id;
        var url = Global.urlAPIDepartamentos + request;
        return this._http.delete(url);
    }
}