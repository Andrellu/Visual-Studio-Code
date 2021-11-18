<template>
  <div>
        <div v-if="equipo">
            <h1>{{equipo.nombre}}</h1>
            <img width="250px" :src="equipo.imagen" alt="equipo"/>
            <p>{{equipo.descripcion}}</p>
            <router-link class="btn btn-success" :to="'/tablaJugadores/'+ idEquipo">Cargar Jugadores</router-link>
        </div>
        <div v-else class="loader"></div>
  </div>
</template>

<script>
import ServiceChampions from './../../services/Champions';

const service = new ServiceChampions();

export default {
    name : "DetallesChampion",
    data(){
        return {
            equipo : {},
            idEquipo : 0
        }
    },
    mounted(){
        this.idEquipo = this.$route.params.idEquipo;
        this.cargarEquipo();
    },
    methods:{
        cargarEquipo(){
            service.getEquiposId2(this.$route.params.idEquipo).then(res => {
                this.equipo = res;
            });
        }
    },
    watch : {
        '$route.params.idEquipo'(nextprop, prevprop){
            if(nextprop != prevprop){
                this.idEquipo = this.$route.params.idEquipo;
                this.cargarEquipo();
            }
        }
    }
}
</script>

<style>
.loader {
  width: 30px;
  height: 30px;
  border: 30px solid #f3f3f3;
  margin:5% auto;
  border-left: 30px solid #FF5D00;
  border-right: 30px solid #FF5D00;
  border-radius: 50%;
  animation: spinIT 0.8s linear infinite;
  filter: drop-shadow(0px 0px 8px gray)
}
@keyframes spinIT {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} 
</style>