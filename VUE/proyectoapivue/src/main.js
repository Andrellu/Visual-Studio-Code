import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Coches from "./components/Coches.vue";
import EmpleadosDetalles from "./components/EmpleadosDetalles.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/coches", component: Coches },
  { path: "/empleadosdetalles", component: EmpleadosDetalles },
  { path: "/empleadosoficios", component: EmpleadosOficios },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
