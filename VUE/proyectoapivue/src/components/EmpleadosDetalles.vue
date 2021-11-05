<template>
    <div>
        <h1 class="text-center">Empleados</h1><br/>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <form method="post" v-on:submit.prevent="mostrarDetalleEmpleado">
                    <label class="text-center">SELECCIONE UN EMPLEADO</label><br/><br/>
                    <select class="form-control" v-model="idEmpleado">
                        <option v-for="(empleado,index) in empleados" :key="index" :value="empleado.idEmpleado">{{empleado.apellido}}</option>
                    </select><br/>
                    <button class="btn btn-success">Mostrar Detalles</button>
                </form>
            </div>
        </div>
        <hr/>
        <div class="row justify-content-center">
            <div class="col-8 text-center" v-if="empleado">
               <div class="card shadow-sm p-4">
                    <h1 class="text-center">{{empleado.apellido}}</h1>
                    <h2>Oficio : {{empleado.oficio}}</h2>
                    <h2>Salario : {{empleado.salario}}</h2>
                    <h2>Departamento : {{empleado.departamento}}</h2>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import Global from "./Global";
import axios  from "axios";
export default {
    name : "EmpleadosDetalles",
    data () {
        return {
            empleados : [],
            idEmpleado : 0,
            empleado : null
        }
    }, 
    mounted(){
        this.cargarEmpleados();
    },
    methods:{
        cargarEmpleados(){
            var request = "api/Empleados";
            var url = Global.urlAPIEmpleados + request;
            axios.get(url).then(res => {
                this.empleados = res.data;
            });
        },
        mostrarDetalleEmpleado(){
            var request = "api/Empleados/" + this.idEmpleado;
            var url = Global.urlAPIEmpleados+request;
            axios.get(url).then(res => {
                this.empleado = res.data;
            });
        }
    }
}
</script>

<style scoped>
    img{
        width: 200px;
    }
</style>