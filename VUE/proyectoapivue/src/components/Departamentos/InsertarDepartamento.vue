<template>
    <div>
        <h1>Soy insertar</h1>
        <router-link class="nav-link" to="/crudservicios"><button type="button" class="btn btn-danger">Volver</button></router-link>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <form v-on:submit.prevent="insertarDepartamento()">
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
import ServiceDepartamentos from './../../services/ServicioDepartamentos'

const service = new ServiceDepartamentos();

export default{
    name : "InsertarDepartamento",
    methods : {
        insertarDepartamento(){
            this.departamento.numero = parseInt(this.departamento.numero);
            service.insertarDepartamento(this.departamento).then(res => {
                console.log(res);
                // Volvemos a la tabla
                this.$router.push("/crudservicios");
            });
        }
    },
    data(){
        return{
            departamento : {
                numero : 0,
                nombre : "",
                localidad : ""
            },
            mensaje : ""
        }
    }
}
</script>
