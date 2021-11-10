<template>
    <div>
        <h1>Soy Detalles</h1>
    </div>
</template>
<script>
import ServiceSeries from './../services/Series';
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
        this.id = this.$route.params.idSerie;
        this.cargarSerie();
    },
    methods : {
        cargarSerie(){
            service.cargarSerie(this.id).then(res => {
                console.log(res);
                //this.serie = res.data;
            });
        }
    }
}
</script>
