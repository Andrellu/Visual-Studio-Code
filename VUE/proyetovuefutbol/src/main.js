import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import detallesChampion from './components/Champions/detallesChampion.vue';
import tablaJugadores from './components/Champions/tablaJugadores.vue';
import detallesJugador from './components/Champions/detallesJugador.vue';
import nuevaApuesta from './components/Champions/nuevaApuesta.vue';
import insertarApuesta from './components/Champions/insertarApuesta.vue';


Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/detallesChampion/:idEquipo",
    component: detallesChampion,
  },
  {
    path: "/tablaJugadores/:idEquipo",
    component: tablaJugadores,
  },
  {
    path: "/detallesJugador/:idJugador",
    component: detallesJugador,
  },
  {
    path: "/apuestas",
    component: nuevaApuesta,
  },
  {
    path: "/insertar",
    component: insertarApuesta,
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
