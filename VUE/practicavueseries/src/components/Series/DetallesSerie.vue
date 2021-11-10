<template>
    <div>
        <h2>{{serie.nombre}}</h2>
        <img :src="serie.imagen"/>
        <h3>La puntuación es de : {{serie.puntuacion}}</h3>
        <h3>Es del año : {{serie.anyo}}</h3>
        <router-link class="btn btn-success" :to="'/tablaSeries/'+serie.idSerie">Personajes Series</router-link>
    </div>
</template>
<script>
import ServiceSeries from './../../services/Series';
const service = new ServiceSeries();
export default{
    name : "DetallesSerie",
    data ()  {
        return {
            id : 0,
            serie : {}
        }
    },
    mounted(){
        this.cargarSerie();
    },
    watch:{
        '$route.params.idSerie'(nextprop, prevprop){
            if(nextprop != prevprop){
                this.cargarSerie();
            }
        }
    },
    methods : {
        cargarSerie(){
            this.id = this.$route.params.idSerie;
            service.getSerie(this.id).then(res => {
                console.log(res);
                this.serie = res;
            });
        }
    }
}
</script>

<style scoped>
    img{
        width: 400px;
    }
</style>