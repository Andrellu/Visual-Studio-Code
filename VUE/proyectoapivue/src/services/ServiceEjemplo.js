import Global from "./../components/Global";
import axios from "axios";

export default class ServiceEjemplo {
  getSaludo(nombre) {
    return "Welcome to my service, " + nombre;
  }

  getPormesa = new Promise(function (resolve, reject) {
    var num = 0;
    if (num == 0) {
      resolve("Andrés Otero y la Andaluza Maria");
    } else {
      reject("Respuesta error.");
    }
  });
  //getPormesaSimple = new Promise(function (resolve) {
  // resolve();
  //});

  //   getEmpleado = new Promise(function (resolve) {
  //     var request = "api/Empleados/7839";
  //     var url = Global.urlAPIEmpleados + request;
  //     var empleado = {
  //       apellido: "No soy nadie...",
  //     };
  //     axios.get(url).then((res) => {
  //       empleado = res.data;
  //       resolve(empleado);
  //     });
  //   });

  getEmpleado(num) {
    return new Promise(function (resolve) {
      var request = "api/Empleados/" + num;
      var url = Global.urlAPIEmpleados + request;
      var empleado = {
        apellido: "No soy nadie...",
      };
      axios.get(url).then((res) => {
        empleado = res.data;
        resolve(empleado);
      });
    });
  }
}
