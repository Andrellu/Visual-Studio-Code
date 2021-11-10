<template>
    <div>
        <h1>Insertar</h1>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <form v-on:submit.prevent="insertarPersonaje()">
                    <div>
                        <label>Nombre</label>
                        <input type="text" v-model="personaje.nombre"/>
                    </div>
                    <div>
                        <label>Imagen</label>
                        <input type="text" v-model="personaje.imagen"/>
                    </div>
                    <div>
                        <select v-model="personaje.idSerie">
                            <option v-for="(serie,index) in series" :key="index" :value="serie.idSerie">{{serie.nombre}}</option>
                        </select>
                    </div>
                    <button>Insertar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceSeries from './../../services/Series';
    const service = new ServiceSeries();
    export default {
        name : "InsertarPersonaje",
        data(){
            return{
                series : [],
                personaje : {
                    idSerie : 0,
                    nombre : "",
                    imagen : ""
                }
            }
        },
        mounted(){
            this.cargarSeries();
        },
        methods : {
            cargarSeries(){
                service.getSeries().then(res => {
                    this.series = res;
                });
            },
            insertarPersonaje(){
                service.insertarPersonaje(this.personaje).then(res => {
                    console.log(res);
                    this.$router.push("/tablaSeries/" + this.personaje.idSerie);
                });
            }
        }
    }
</script>