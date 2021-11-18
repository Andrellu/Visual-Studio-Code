import Global from "./../components/Global";
import axios from "axios";

export default class ServiciosChampions{

    getEquipos(){
        return new Promise(function(resolve){
            var request = "api/Equipos";
            var url = Global.urlApiChampionsOkay + request;
            axios.get(url).then(res => {
                resolve(res.data);
            })
        });
    }

    getEquiposId(id){
        return new Promise(function(resolve){
            var request = "api/Jugadores/JugadoresEquipos/"+ id;
            var url = Global.urlApiChampionsOkay + request;
            console.log(url);
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

    getEquiposId2(id){
        return new Promise(function(resolve){
            var request = "api/Equipos/"+id;
            var url = Global.urlApiChampionsOkay+request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

    getJugadoresId(id){
        return new Promise(function(resolve){
            var request = "api/Jugadores/" + id;
            var url = Global.urlApiChampionsOkay + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

    getApuestas(){
        return new Promise(function(resolve){
            var request = "api/Apuestas";
            var url = Global.urlApiChampionsOkay + request;
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

    cargarBusqueda(nombre){
        return new Promise(function(resolve){
            var request = "api/Jugadores/BuscarJugadores/"+nombre;
            var url = Global.urlApiChampionsOkay + request;
            console.log(url);
            axios.get(url).then(res => {
                // Necesita un data
                resolve(res.data);
            });
        });
    }

    eliminaApuesta(idApuesta){
        return new Promise(function(resolve){
            var request = "api/Apuestas/" + idApuesta;
            var url = Global.urlApiChampionsOkay + request;
            axios.delete(url).then(res => {
                resolve(res);
            });
        });
    }
}