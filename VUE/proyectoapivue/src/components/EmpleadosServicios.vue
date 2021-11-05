<template>
    <div>
        <h1>Soy El Servicio Empleados</h1>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <form class="form-control">
                    <select class="form-control" v-model="oficio">
                        <option v-for="(oficio,index) in oficios" :key="index">{{oficio}}</option>
                    </select>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceEmpleado from "./../services/ServiciosEmpleados";
const servive = new ServiceEmpleado();
export default {
    name:"EmpleadosServicios",
    data(){
        return {
            oficios : [],
            oficio : ""
        }
    },
    mounted(){
        servive.getEmpleados().then(res => {
            console.log(res);
            this.oficios = res;
        });
    },
    methods : {
        //servive.
    }
}
</script>