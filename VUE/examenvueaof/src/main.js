import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import buscarPelicula from "./components/Peliculas/buscarPelicula.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/buscar/:nombre",
    component: buscarPelicula,
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
