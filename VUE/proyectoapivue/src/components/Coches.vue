<template>
    <div>
        <h1 class="text-center">API Coches</h1><br/>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <table border="2" class="table table-striped">
                    <thead>
                        <tr>
                            <td>Marca</td>
                            <td>Modelo</td>
                            <td>Imagen</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="coche in coches" :key="coche">
                            <td>{{coche.marca}}</td>
                            <td>{{coche.modelo}}</td>
                            <td><img :src="coche.imagen"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Global from "./Global";
    // AQUI PODEMOS DECLARAR VARIABLES 
    // GLOBALES PARA TODO EL COMPONENTE
    //var urlCoches = "https://apicochespaco.azurewebsites.net/";
    export default {
        name : "Coches",
        mounted(){
            this.cargarCoches();
        },
        methods :{
            cargarCoches(){
                var request = "webresources/coches";
                var urlCoches = Global.urlAPICoches;
                //var url = urlCoches + request;
                var url = urlCoches+request;
                axios.get(url).then(res => {
                    this.coches = res.data;
                });
            }
        },
        data(){
            return{
                coches : []
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