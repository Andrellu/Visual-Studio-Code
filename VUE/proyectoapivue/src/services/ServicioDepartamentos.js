import Global from "./../components/Global";
import axios from "axios";

export default class ServiciosEmpleados {
  getDepartamentos() {
    return new Promise(function (resolve) {
      var request = "api/Departamentos";
      var url = Global.urlAPIDepartamentos + request;
      axios.get(url).then((res) => {
        var departamentos = res.data;
        resolve(departamentos);
      });
    });
  }

  insertarDepartamento(departamento) {
    return new Promise(function (resolve) {
      var request = "api/Departamentos";
      var url = Global.urlAPIDepartamentos + request;
      axios.post(url, departamento).then((res) => {
        resolve(res);
      });
    });
  }

  buscarDepartamento(id) {
    return new Promise(function (resolve) {
      var request = "api/Departamentos/" + id;
      var url = Global.urlAPIDepartamentos + request;
      axios.get(url).then((res) => {
        var departamento = res.data;
        resolve(departamento);
      });
    });
  }

  modificarDepartamento(departamento) {
    return new Promise(function (resolve) {
      var request = "api/Departamentos";
      var url = Global.urlAPIDepartamentos + request;
      axios.put(url, departamento).then((res) => {
        resolve(res);
      });
    });
  }
}
