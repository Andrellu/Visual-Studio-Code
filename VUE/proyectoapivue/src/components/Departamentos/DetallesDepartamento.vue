<template>
    <div>
        <h1>Detalles Departamento</h1>
        <router-link class="btn btn-danger" to="/crudservicios">Volver</router-link>
        <h2>{{departamento.nombre + ", " + departamento.localidad}}</h2>
    </div>
</template>
<script>

export default{
    name : "DetallesDepartamento",
    data(){
        return{
            departamento : {
                numero : 0,
                nombre : "",
                localidad : ""
            }
        }
    },
    mounted () {
        this.departamento.numero = this.$route.params.iddeaprtamento; 
        this.departamento.nombre = this.$route.params.nombre;
        this.departamento.localidad =  this.$route.params.localidad;
    }
}
</script>
