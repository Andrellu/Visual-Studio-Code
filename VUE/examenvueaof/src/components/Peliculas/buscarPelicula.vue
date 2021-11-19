<template>
  <div>
    <div>
      <div>
          <table v-if="jugadores">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Posicion</th>
                      <th>Imagen</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(peli, index) in peliculas" :key="index">
                      <td>{{peli.nombre}}</td>
                      <td>{{peli.posicion}}</td>
                      <td><img :src="peli.foto" alt="imagen"/></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
  </div>
</template>

<script>
import ServicePeliculas from './../../components/Services/Peliculas';
const service = new ServicePeliculas();
export default {
  name : "BuscarPelicula",
  mounted(){

  },
  methods:{
    cargarPeliculas(){
      service.getPeliculasNombre().then(res=>{
        this.peliculas = res;
      });
    }
  },
  data(){
    return {
      nombre : "",
      peliculas : []
    }
  }

}
</script>

<style>

</style>