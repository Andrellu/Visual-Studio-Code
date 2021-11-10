<template>
  <div>
      <h1>Modificar</h1>
      <div class="row justify-content-center">
          <div class="col-8 text-center">
              <form v-on:submit.prevent="modificarPersonaje()">
                  <div>
                        <label>Personajes</label>
                        <select v-model="idPersonaje">
                            <option v-for="(personaje,index) in personajes" :key="index" :value="personaje.idPersonaje">{{personaje.nombre}}</option>
                        </select>
                    </div>
                    <div>
                        <label>Series</label>
                        <select v-model="idSerie">
                            <option v-for="(serie,index) in series" :key="index" :value="serie.idSerie">{{serie.nombre}}</option>
                        </select>
                    </div>
                    <button>Modificar</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import ServiceSeries from './../../services/Series';
const services = new ServiceSeries();
export default {
    name : "ModificarPersonaje",
    mounted() {
        this.cargarSeries();
        this.cargarPersonajes();
    },
    methods : {
        cargarSeries(){
            services.getSeries().then(res => {
                this.series = res;
            });
        },
        cargarPersonajes(){
            services.getPersonajesTotal().then(res => {
                this.personajes = res;
            });
        },
        modificarPersonaje(){
            services.modificarPersonaje(this.idPersonaje, this.idSerie).then(res => {
                console.log(res);
                this.$router.push("/tablaSeries/" + this.idSerie);
            });
        }
    },
    data(){
        return{
            personajes : [],
            series : [],
            idPersonaje : 0,
            idSerie : 0
        }
    }
}
</script>