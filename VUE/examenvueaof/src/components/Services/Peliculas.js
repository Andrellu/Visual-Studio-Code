import Global from "./../../Global";
import axios from "axios";

export default class ServiciosPeliculas {
  getGeneros() {
    return new Promise(function (resolve) {
      var request = "api/Generos";
      var url = Global.urlAPIPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getNacionalidad() {
    return new Promise(function (resolve) {
      var request = "api/Nacionalidades";
      var url = Global.urlAPIPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getPeliculasNombre(nombre) {
    return new Promise(function (resolve) {
      var request = "api/Peliculas/PeliculasTitulo/" + nombre;
      var url = Global.urlAPIPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }
}
