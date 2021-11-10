<template>
    <div>
        <h1>Soy ELiminar</h1>
         <router-link class="btn btn-danger" to="/crudservicios">Volver</router-link>
    </div>
</template>
<script>
import ServiceDepartamentos from './../../services/ServicioDepartamentos'

const service = new ServiceDepartamentos();

export default{
    name : "EliminarDepartamento",
    data(){
        return {
            id : 0
        }
    },
    mounted () {
        this.id = this.$route.params.iddepartamento;
        this.deleteDepartamento();
    },
    methods : {
        deleteDepartamento(){
            service.eliminarDepartamento(this.id).then(res => {
                console.log(res);
                this.$router.push("/crudservicios");
            });
        }
    }
}
</script>
