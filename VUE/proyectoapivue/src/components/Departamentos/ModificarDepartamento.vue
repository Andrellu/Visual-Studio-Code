<template>
    <div>
        <h1>Soy Modificar</h1>
        <router-link class="btn btn-danger" to="/crudservicios">Volver</router-link>
    </div>
</template>
<script>

export default{
    name : "ModificarDepartamento",
    data() {
        return {
            departamento  :{
                numero : 0,
                nombre : "",
                localidad : ""
            }
        }
    },
    methods : {
        modificarDepartamento(){

        }
    }
}
</script>
