import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Coches from "./components/Coches.vue";
import EmpleadosDetalles from "./components/EmpleadosDetalles.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
import EjemploServicio from "./components/EjemploServicio.vue";
import EmpleadosServicios from "./components/EmpleadosServicios.vue";
import Departamentos from "./components/Departamentos/Departamentos.vue";
import insertarDepartamento from "./components/Departamentos/InsertarDepartamento.vue";
import modificarDepartamento from "./components/Departamentos/ModificarDepartamento.vue";
import detallesDepartamento from "./components/Departamentos/DetallesDepartamento.vue";
import eliminarDepartamento from "./components/Departamentos/EliminarDepartamento.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/coches", component: Coches },
  {
    path: "/detallesDepartamento/:iddepartamento/:nombre/:localidad",
    component: detallesDepartamento,
  },
  {
    path: "/modificarDepartamento/:iddepartamento",
    component: modificarDepartamento,
  },
  {
    path: "/eliminarDepartamento/:iddepartamento",
    component: eliminarDepartamento,
  },
  { path: "/insertarDepartamento", component: insertarDepartamento },
  { path: "/crudservicios", component: Departamentos },
  { path: "/empleadosdetalles", component: EmpleadosDetalles },
  { path: "/empleadosoficios", component: EmpleadosOficios },
  { path: "/ejemploservicio", component: EjemploServicio },
  { path: "/empleadoservicios", component: EmpleadosServicios },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
