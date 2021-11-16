import Global from "./../components/Global";
import axios from "axios";

export default class ServiciosChampions{

    getEquipos(){
        return new Promise(function(resolve){
            var request = "api/Equipos";
            var url = Global.urlAPIChampions + request;
            axios.get(url).then(res => {
                resolve(res.data);
            })
        });
    }

    getEquiposId(id){
        return new Promise(function(resolve){
            var request = "api/Jugadores/JugadoresEquipo/"+ id;
            var url = Global.urlAPIChampions + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

    getJugadoresId(id){
        return new Promise(function(resolve){
            var request = "api/Jugadores/" + id;
            var url = Global.urlAPIChampions + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

    getApuestas(){
        return new Promise(function(resolve){
            var request = "api/Apuestas";
            var url = Global.urlAPIChampions + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
    }

    insertarApuesta(apuesta){
        return new Promise(function(resolve){
            var request = "api/Apuestas";
            var url = Global.urlAPIChampions + request;
            axios.post(url, apuesta).then(res => {
                resolve(res);
            });
        });
    }
}