import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Tabla from "./components/TablaMultiplicar";
import Deporte from "./components/Deportes";
import Numeros from "./components/NumerosPadre";
import Comic from "./components/Comics";
import NumerosDobles from "./components/NumeroDoble";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/tablaMultiplicar", component: Tabla },
  { path: "/deportes", component: Deporte },
  { path: "/numerosPadre", component: Numeros },
  { path: "/comic", component: Comic },
  { path: "/numerosdoble/:id?", component: NumerosDobles },
  { path: "/", component: Tabla },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
