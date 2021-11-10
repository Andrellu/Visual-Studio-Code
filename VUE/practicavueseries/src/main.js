import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import detallesSerie from "./components/Series/DetallesSerie.vue";
import tablaPersonajes from './components/Series/TablaPersonajes.vue';
import insertarPersonje from './components/Series/InsertarPersonaje';
import modificarPersonaje from './components/Series/ModificarPersonaje.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/detallesSerie/:idSerie",
    component: detallesSerie,
  },
  {
    path: "/tablaSeries/:idSerie",
    component: tablaPersonajes,
  },
  {
    path: "/insertarPersonaje",
    component: insertarPersonje,
  },
  {
    path: "/modificarPersonaje",
    component: modificarPersonaje,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
