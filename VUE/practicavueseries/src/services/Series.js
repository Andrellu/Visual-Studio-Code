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
}
