import Global from "./../components/Global";
import axios from "axios";

export default class ServiciosEmpleados {
  getSeries() {
    return new Promise(function (resolve) {
      var request = "api/Series";
      var url = Global.urlAPISeries + request;
      axios.get(url).then((res) => {
        var series = res.data;
        resolve(series);
      });
    });
  }

  getPersonajesTotal(){
    return new Promise(function(resolve){
      var request = "api/Personajes";
      var url = Global.urlAPISeries + request;
      axios.get(url).then(res => {
        var personajes = res.data;
        resolve(personajes);
      });
    });
  }

  getSerie(id) {
    return new Promise(function (resolve) {
      var request = "api/Series/" + id;
      var url = Global.urlAPISeries + request;
      axios.get(url).then((res) => {
        var serie = res.data;
        resolve(serie);
      });
    });
  }

  getPersonajes(id){
    return new Promise(function(resolve){
      var request = "api/Series/PersonajesSerie/" + id;
      var url = Global.urlAPISeries + request;
      axios.get(url).then(res => {
        var personajes = res.data;
        resolve(personajes);
      });
    });
  }

  insertarPersonaje(personaje){
    return new Promise(function(resolve){
      var request = "api/personajes";
      var url = Global.urlAPISeries + request;
      axios.post(url, personaje).then(res => {
        resolve(res.data);
      });
    });
  }

  modificarPersonaje(idPersonaje, idSerie){
    return new Promise(function(resolve){
      var request = "api/personajes/" + idPersonaje + "/" + idSerie;
      var url = Global.urlAPISeries + request;
      axios.put(url).then(res => {
        resolve(res);
      });
    });
  }
}
