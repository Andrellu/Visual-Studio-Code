import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/navegacion/Home.vue";
import Musica from "./components/navegacion/Musica.vue";
import Cine from "./components/navegacion/Cine.vue";
import Television from "./components/navegacion/Television.vue";
import CicloVida from "./components/CicloVida.vue";
import Juegos from "./components/JuegosConmutados.vue";
import Directivas from "./components/Directivas.vue";

Vue.config.productionTip = false;
// DAMOS DE ALTA EL ROUTER
Vue.use(VueRouter);
// NECESITAMOS UN ARRAY CON LAS RUTAS
const routes = [
  { path: "/home", component: Home },
  { path: "/cine", component: Cine },
  { path: "/musica", component: Musica },
  { path: "/television", component: Television },
  { path: "/ciclovida", component: CicloVida },
  { path: "/directivas", component: Directivas },
  { path: "/juegos", component: Juegos },
  { path: "/", component: Home },
];

// UNA VEZ CREADAS LAS RUTAS NOS CREAMOS UN OBJETO ROUTER
const router = new VueRouter({
  routes,
  mode: "history",
});

//DEBEMOS DAR DE ALTA EL OBJETO ROUTER AL CREAR LA APP
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
