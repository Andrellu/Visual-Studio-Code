<template>
    <div>
        <h1>Soy Modificar</h1>
        <router-link class="btn btn-danger" to="/crudservicios">Volver</router-link>
        <div class="row justify-content-center">
            <div class="col-8 text-center" v-if="departamento">
                <form v-on:submit.prevent="modificarDepartamento()">
                    <div class="form-control">
                        <label>Numero :  {{" "}}</label><br/>
                        <input type="text" v-model="departamento.numero"/>
                    </div>
                    <div class="form-control">
                        <label>Nombre : {{" "}} </label><br/>
                        <input type="text" v-model="departamento.nombre"/>
                    </div>
                    <div class="form-control">
                        <label>Localidas : {{" "}}</label><br/>
                        <input type="text" v-model="departamento.localidad"/>
                    </div><br/>
                    <button class="btn btn-success">Insertar</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceDepartamentos from './../../services/ServicioDepartamentos.js'

const service = new ServiceDepartamentos();
export default{
    name : "ModificarDepartamento",
    data() {
        return {
            departamento  : null,
            id : 0
        }
    },
    methods : {
        modificarDepartamento(){
            this.departamento.numero = parseInt(this.departamento.numero);

        },
        buscarDepartamento(){
           service.buscarDepartamento(this.id).then(res => {
               this.departamento = res;
           });
        }
    },
    mounted(){
        this.id  = this.$route.params.iddepartamento;
        this.buscarDepartamento();
    }
}
</script>
