<template>
    <div>
        <h1>Soy la tabla de personajes</h1>
        <router-link class="btn btn-primary" :to="'/detallesSerie/'+id">Volver</router-link><br/><br/>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <table class="table table-striped" border="2">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(personaje,index) in personajes" :key="index">
                            <td>{{personaje.nombre}}</td>
                            <td><img :src="personaje.imagen"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceSeries from './../../services/Series';

const service = new ServiceSeries();

export default{
    name : "TablaPersonajes",
    data(){
        return {
           personajes : [],
           id : 0
        }
    },
    mounted(){
        this.id = this.$route.params.idSerie;
        this.cargarPersonajes();
    },
    methods : {
        cargarPersonajes(){
            service.getPersonajes(this.id).then(res => {
                this.personajes = res;
            });
        }
    }
}
</script>
<style scoped>
    img{
        width: 350px;
    }
</style>