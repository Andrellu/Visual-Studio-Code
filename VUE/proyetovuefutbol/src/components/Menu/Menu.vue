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
          <li class="nav-item">
            <router-link class="nav-link" to="/apuestas">Nuevo Apuesta</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Equipos</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04" >
              <li v-for="(equipo,index) in equipos" :key="index"><router-link class="nav-link" style="color:black" :to="'/detallesChampion/' + equipo.idEquipo">{{equipo.nombre}}</router-link></li>
            </ul>
          </li>
        </ul>
        <form>
          <input
            class="form-control"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceChampions from './../../services/Champions';

const service = new ServiceChampions();

export default {
  name : "Menu",
  data(){
    return {
      equipos : []
    }
  },
  mounted(){
    this.cargarEquipos();
  },
  methods : {
    cargarEquipos(){
      service.getEquipos().then(res => {
        console.log(res);
        this.equipos = res;
      });
    }
  }
}
</script>

<style>

</style>