<template>
    <div>
        <h1>Soy Departamentos</h1>
        <br/>
        <router-link class="btn btn-primary" to="/insertarDepartamento">Nuevo Departamento</router-link> {{" "}}
        <br/>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <table  class="table table-striped" border="2" v-if="departamentos.length != 0">
                    <thead>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Localidad</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr v-for="(dept,index) in  departamentos" :key="index">
                            <td>{{dept.numero}}</td>
                            <td>{{dept.nombre}}</td>
                            <td>{{dept.localidad}}</td>
                            <td>
                                <router-link class="btn btn-success" :to="'/detallesDepartamento/' + dept.numero + '/'+ dept.nombre + '/' + dept.localidad">Detalles</router-link>{{" "}}
                                <router-link class="btn btn-warning" :to="'/modificarDepartamento/' + dept.numero">Modificar</router-link>{{" "}}
                                <router-link class="btn btn-danger" :to="'/eliminarDepartamento/' + dept.numero">Eliminar</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceDepartamentos from './../../services/ServicioDepartamentos'

const service = new ServiceDepartamentos();

export default{
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
}
</script>
