<template>
    <div>
        <h1>Soy el ejemplo servicio API</h1>
        <h2 style="color:blue">{{saludo}}</h2>
        <h2 v-if="empleado">{{empleado.apellido}}</h2>
         <h2 v-else>no tenemps nada</h2>
    </div>
</template>
<script>
import ServiceEjemplo from "./../services/ServiceEjemplo";
const service =  new ServiceEjemplo();
export default {
    name : "EjemploServicio",
    data(){
        return{
            saludo : "",
            empleado : null
        }
    },
    mounted () {
        this.saludo = service.getSaludo("Andrés");
        service.getPormesa.then(res => {
            this.saludo = res;
        })
        // service.getEmpleado.then(res => {
        //     this.empleado = res;
        // });
        service.getEmpleado(7369).then(res => {
            this.empleado =res
        });
    },
}
</script>