<template>
    <div>
        <h1>Soy El Servicio Empleados</h1>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <form class="form-control">
                    <select class="form-control" v-model="oficio" @change.prevent="cargarEmpleadosOficio">
                        <option :value="oficio" v-for="(oficio,index) in oficios" :key="index">{{oficio}}</option>
                    </select>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-8 text-center" v-if="empleadosOficios.length != 0">
                <table border="2" class="table table-striped">
                    <thead>
                        <tr>
                            <th>APELLIDO</th>
                            <th>OFICIO</th>
                            <th>SALARIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(empleado,index) in empleadosOficios" :key="index">
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
import ServiceEmpleado from "./../services/ServiciosEmpleados";
const service = new ServiceEmpleado();
export default {
    name:"EmpleadosServicios",
    data(){
        return {
            oficios : [],
            oficio : "",
            empleadosOficios : []
        }
    },
    mounted(){
        service.getEmpleados().then(res => {
            //console.log(res);
            this.oficios = res;
        });
    },
    methods : {
        cargarEmpleadosOficio(){
            service.cargarEmpleadosOficio(this.oficio).then(res => {
                console.log(res);
                this.empleadosOficios = res;
            });
        }
    }
}
</script>