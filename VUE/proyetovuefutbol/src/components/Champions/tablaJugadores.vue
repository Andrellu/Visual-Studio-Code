<template>
    <div>
        <h1>Soy la tabla</h1>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <table class="table table-striped" border="2">
                    <thead>
                        <th>Nombre</th>
                        <th>Posición</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr v-for="(jugador, index) in jugadores" :key="index">
                            <td>{{jugador.nombre}}</td>
                            <td>{{jugador.posicion}}</td>
                            <td><img :src="jugador.imagen" alt="imagen"/></td>
                            <td><router-link class="btn btn-success" :to="'/detallesJugador/'+ jugador.idJugador">Detalles</router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceChampions from './../../services/Champions';
const service = new ServiceChampions();
export default {
    name : "TablaJugadores",
    data(){
        return{
            jugadores : [],
            id : 0
        }
    },
    mounted(){
        this.id = this.$route.params.idEquipo;
        this.cargarTablaJugadores();
    },
    methods : {
        cargarTablaJugadores(){
            service.getEquiposId(this.id).then(res => {
                this.jugadores = res;
            });
        }
    }
}
</script>

<style>

</style>