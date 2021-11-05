import Global from "./../components/Global";
import axios from "axios";

export default class ServiciosEmpleados {
  getEmpleados() {
    return new Promise(function (resolve) {
      var request = "api/Empleados/oficios";
      var url = Global.urlAPIEmpleados + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }
  cargarEmpleadosOficio(oficio) {
    return new Promise(function (resolve) {
      var request = "api/Empleados/EmpleadosOficio/" + oficio;
      var url = Global.urlAPIEmpleados + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }
}
