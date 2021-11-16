<template>
  <div>
        <h1>{{equipo.nombre}}</h1>
        <img width="250px" :src="equipo.imagen" alt="equipo"/>
        <p>{{equipo.descripcion}}</p>
        <router-link class="btn btn-success" :to="'/tablaJugadores/'+ idEquipo">Cargar Jugadores</router-link>
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
            service.getEquiposId(this.$route.params.idEquipo).then(res => {
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

</style>