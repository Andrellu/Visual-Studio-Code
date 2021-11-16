<template>
  <div>
      <h1>Apuestas</h1>
      <router-link class="btn btn-success" to="/insertar">Insertar Apuesta</router-link><br/><br/>
      <div class="row justify-content-center">
          <div class="col-8 text-center">
              <table class="table table-striped" border="2">
                  <thead>
                      <th>ID Apuesta</th>
                      <th>Usuario</th>
                      <th>Resultado</th>
                      <th>Fecha</th>
                  </thead>
                  <tbody>
                      <tr v-for="(apuesta, index) in apuestas" :key="index">
                          <td>{{apuesta.idApuesta}}</td>
                          <td>{{apuesta.usuario}}</td>
                          <td>{{apuesta.resultado}}</td>
                          <td>{{apuesta.fecha}}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
import ServiceChampions from './../../services/Champions';
const service = new ServiceChampions();
export default {
    name : "NuevaApuesta",
    data(){
        return{
            apuestas : []
        }
    },
    mounted(){
        this.cargarApuestas();
    },
    methods : {
        cargarApuestas(){
            service.getApuestas().then(res => {
                this.apuestas = res;
            });
        }
    }
}
</script>

<style>

</style>