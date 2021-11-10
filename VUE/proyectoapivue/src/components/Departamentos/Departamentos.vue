<template>
    <div>
        <h1>Soy Departamentos</h1>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <table  class="table table-striped" border="2" v-if="departamentos.length != 0">
                    <thead>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Localidad</th>
                    </thead>
                    <tbody>
                        <tr v-for="(dept,index) in  departamentos" :key="index">
                            <td>{{dept.numero}}</td>
                            <td>{{dept.nombre}}</td>
                            <td>{{dept.localidad}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import ServiceDepartamentos from './../../services/ServicioDepartamentos'

const service = new ServiceDepartamentos();

export default defineComponent({
    name : "Departamentos",
    data() {
        return {
            departamentos : [],

        }
    },
    mounted (){
       this.cargarDepartamentos();
    },
    methods : {
        cargarDepartamentos() {
             service.getDepartamentos().then(res => {
                this.departamentos = res;
                //console.log(this.departamentos.numero);
            });
        }
    }
})
</script>
