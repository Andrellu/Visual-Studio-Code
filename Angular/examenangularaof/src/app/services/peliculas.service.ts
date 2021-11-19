import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable()
export class ServicePeliculas{
    constructor(private _http: HttpClient){}

    getGeneros():Observable<any>{
        var request = "api/Generos";
        var url = Global.urlAPIPeliculas + request;
        return this._http.get(url);
    }

    getNacionalidades():Observable<any>{
        var request = "api/Nacionalidades";
        var url = Global.urlAPIPeliculas + request;
        return this._http.get(url);
    }

    getPeliculasGeneroId(idGenero:string):Observable<any>{
        var request = "api/Peliculas/PeliculasGenero/"+idGenero;
        var url = Global.urlAPIPeliculas + request;
        return this._http.get(url);
    }

    getPeliculasNacionalidadId(idNacionalidad:string):Observable<any>{
        var request = "api/Peliculas/PeliculasNacionalidad/" + idNacionalidad;
        var url = Global.urlAPIPeliculas + request;
        return this._http.get(url);
    }

    getPeliculasNombre(nombre:string):Observable<any>{
        var request = "api/Peliculas/PeliculasTitulo/"+nombre;
        var url = Global.urlAPIPeliculas + request;
        return this._http.get(url);
    }

    getNacionalidadId(idNacio:number):Observable<any>{
        var request = "api/Nacionalidades/"+idNacio;
        var url = Global.urlAPIPeliculas + request;
        return this._http.get(url);
    }
    
    getGeneroId(idGen:number): Observable<any>{
        var request = "api/Generos/"+idGen;
        var url = Global.urlAPIPeliculas + request;
        return this._http.get(url);
    }

    deletePelicula(idPelicula:number):Observable<any>{
        var request = "api/Peliculas/"+idPelicula;
        var url = Global.urlAPIPeliculas + request;
        return this._http.delete(url);
    }

    updateGenero(idPelicula:string,idGenero:string):Observable<any>{
        var request = "api/Peliculas/"+idPelicula + "/" + idGenero;
        var url = Global.urlAPIPeliculas + request;
        var valor = "";
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(url, valor, {headers:header});
    }
}