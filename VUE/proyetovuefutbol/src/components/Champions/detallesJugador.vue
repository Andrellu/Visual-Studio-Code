<template>
  <div>
      <div>
            <h1>Jugador : {{jugador.nombre}}</h1>
            <img :src="jugador.imagen" alt="imagen"/>
            <p>Posicion : {{jugador.posicion}}</p>
            <router-link class="btn btn-success" :to="'/tablaJugadores/'+ jugador.idEquipo">Volver</router-link>
      </div>
  </div>
</template>

<script>
import ServiceChampions from './../../services/Champions';
const service = new ServiceChampions();
export default {
    name : "DetallesJugador",
    data(){
        return{
            jugador : {},
            id : 0
        }
    },
    mounted(){
        this.id = this.$route.params.idJugador;
        this.cargarJugador();
    },
    methods : {
        cargarJugador(){
            service.getJugadoresId(this.id).then(res => {
                this.jugador = res;
            });
        }
    }
}
</script>

<style>

</style>