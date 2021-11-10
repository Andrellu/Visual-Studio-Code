import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import detallesSerie from "./components/Series/DetallesSerie.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/detallesSerie/:idSerie",
    component: detallesSerie,
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
