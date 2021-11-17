import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Personajes } from "../model/Personajes";

@Injectable()
export class ServiceSeries{

    constructor(private _http: HttpClient){}

    getSeries():Observable<any>{
        var request = "api/Series";
        var url = Global.urlAPISeries + request;
        return this._http.get(url);
    }

    getPersonajes():Observable<any>{
        var request = "api/Personajes";
        var url = Global.urlAPISeries + request;
        return this._http.get(url);
    }

    getSerieId(id:number):Observable<any>{
        var request = "api/Series/" + id;
        var url = Global.urlAPISeries + request;
        return this._http.get(url);
    }

    getPersonajesSerieId(id:string):Observable<any>{
        var request = "api/Series/PersonajesSerie/"+id;
        var url = Global.urlAPISeries + request;
        return this._http.get(url);
    }

    insertPersonaje(personaje:Personajes):Observable<any>{
        var request = "api/Personajes";
        var url = Global.urlAPISeries + request;
        var json = JSON.stringify(personaje);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(url,json,{headers:header});
    }

    updatePersonaje(idPersonaje:string, idSerie:string):Observable<any>{
        var request = "api/Personajes/" + idPersonaje + "/" + idSerie;
        var url = Global.urlAPISeries + request;
        var valor = "";
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(url, valor, {headers:header});
    }
}