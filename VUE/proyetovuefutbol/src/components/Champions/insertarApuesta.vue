<template>
  <div>
      <form v-on:submit.prevent="insertarApuesta()">
        <label>Usuario</label>    
        <input type="text" v-model="apuesta.usuario"/><br/>
        <label>Resultado</label>    
        <input type="text" v-model="apuesta.resultado"/><br/>
        <label>Fecha</label>    
        <input type="text" v-model="apuesta.fecha"/><br/>
        <button>Insertar</button>
      </form>
  </div>
</template>

<script>
import ServiceChampions from './../../services/Champions';
const service = new ServiceChampions();
export default {
    name : "InsertarApuesta",
    data(){
        return{
            apuesta : {
                idApuesta : 0,
                usuario : "",
                resultado: "",
                fecha: ""
            }
        }
    },
    methods : {
        insertarApuesta(){
            service.insertarApuesta(this.apuesta).then(res => {
                console.log(res);
                this.$router.push("/apuestas");
            });
        }
    }
}
</script>

<style>

</style>