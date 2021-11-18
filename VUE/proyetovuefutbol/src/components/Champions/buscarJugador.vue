<template>
  <div>
      <div>
          <table v-if="jugadores">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Posicion</th>
                      <th>Imagen</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(jugador, index) in jugadores" :key="index">
                      <td>{{jugador.nombre}}</td>
                      <td>{{jugador.posicion}}</td>
                      <td><img :src="jugador.imagen" alt="imagen"/></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import ServiceChampions from './../../services/Champions';
const service = new ServiceChampions();
export default {
    name : "BuscadorJugador",
    data(){
        return{
            nombre : "",
            jugadores : []
        }
    },
    mounted(){
        this.nombre = this.$route.params.nombre;
        console.log(this.nombre);
        this.Busqueda();
    },
    methods : {
        Busqueda(){
            service.cargarBusqueda(this.nombre).then(res => {
                this.jugadores = res;
                console.log(res);
            });
        }
    },
    watch:{
        '$route.params.nombre'(nextprop, prevprop){
            if(nextprop != prevprop){
                this.nombre = this.$route.params.nombre;
                this.Busqueda();
            }
        }
    }
}
</script>

<style>
img{
    width: 150px;
}
</style>