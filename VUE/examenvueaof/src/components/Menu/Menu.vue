<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
    >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">HOME</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Género</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04" >
              <li v-for="(genero,index) in generos" :key="index"><router-link class="nav-link" style="color:black" to="/">{{genero.nombre}}</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Nacionalidad</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04" >
              <li v-for="(nacion,index) in nacionalidades" :key="index"><router-link class="nav-link" style="color:black" to="/">{{nacion.nombre}}</router-link></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" v-on:submit.prevent="realizarBusqueda()">
          <input v-model="cajaBuscar" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <router-link class="btn btn-outline-success" :to="'/buscar/'+cajaBuscar">Buscar</router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import ServicePeliculas from './../../components/Services/Peliculas';
const service = new ServicePeliculas();
export default {
  name :"Menu",
  mounted(){
    this.getGeneros();
    this.getNacionalidades();
  },
  methods : {
    getGeneros(){
      service.getGeneros().then(res => {
        this.generos = res;
      });

    },
    getNacionalidades(){
      service.getNacionalidad().then(res => {
        this.nacionalidades = res;
      });
    },
    realizarBusqueda(){
      console.log(this.cajaBuscar);
    }
  },
  data(){
    return{
      nacionalidades : [],
      generos : [],
      cajaBuscar : ""
    }
  }

}
</script>

<style>

</style>