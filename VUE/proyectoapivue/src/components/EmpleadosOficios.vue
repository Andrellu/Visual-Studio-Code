<template>
    <div>
        <h1 class="text-center">Empleados Oficios</h1>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <form method="post">
                    <label class="text-center">OFICIOS</label><br/>
                    <select class="form-control" v-model="oficio" @change.prevent="cargarEmpleadosOficio">
                        <option v-for="(oficio,index) in oficios" :key="index" :value="oficio">{{oficio}}</option>
                    </select><br/><br/>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-8 text-center" v-if="empleadosOficio.length != 0">
                <table border="2" class="table table-striped">
                    <thead>
                        <tr>
                            <td>Apellido</td>
                            <td>Oficio</td>
                            <td>Salario</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleadosOficio" :key="empleado">
                            <td>{{empleado.apellido}}</td>
                            <td>{{empleado.oficio}}</td>
                            <td>{{empleado.salario}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Global from "./Global";
import axios from "axios";

export default {
    name : "EmpleadosOficios",
    data(){
        return {
            oficios : [],
            oficio : "",
            empleadosOficio : []

        }
    },
    mounted(){
        this.cargarOficios();
    },
    methods :{
        cargarOficios(){
            var request = "api/Empleados/oficios";
            var url = Global.urlAPIEmpleados+request;
            axios.get(url).then(res => {
                this.oficios = res.data;
            });
        },
        cargarEmpleadosOficio(){
            var request = "api/Empleados/EmpleadosOficio/" + this.oficio;
            var url = Global.urlAPIEmpleados + request;
            axios.get(url).then(res => {
                this.empleadosOficio = res.data;
            });
        }
    }
}
</script>

<style scoped>
    img{
        width: 200px;
    }
    table tbody{
        background: cyan;
        color: darkblue;
    }
    table thead{
        background: darkslategrey;
        color: floralwhite;
    }
</style>