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
                      <th>Borrar</th>
                  </thead>
                  <tbody>
                      <tr v-for="(apuesta, index) in apuestas" :key="index">
                          <td>{{apuesta.idApuesta}}</td>
                          <td>{{apuesta.usuario}}</td>
                          <td>{{apuesta.resultado}}</td>
                          <td>{{apuesta.fecha}}</td>
                          <td><button data-bs-toggle="modal" data-bs-target="#myModal" @click="recogerId(apuesta.idApuesta)">Borrar</button></td>
                      </tr>
                  </tbody>
              </table>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">ELIMINAR</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div> 
                            <div class="modal-body">¿Desea Elimnar la Apuesta?</div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="eliminarApuesta()">Aceptar</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
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
            apuestas : [],
            idApuesta : 0
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
        },
        recogerId(id){
            console.log("aui");
            this.idApuesta = id;

        },
        eliminarApuesta(){
            service.eliminaApuesta(this.idApuesta).then(res => {
                console.log(res);
                this.cargarApuestas();
            });
        }
    }
}
</script>

<style>

</style>