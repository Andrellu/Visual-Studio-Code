<template>
    <div>
        <h1>Soy Deportes padres</h1>
        <ul>
            <li v-for="i in deportes" :key="i" style="color:red">
                {{i}}
                <Deporte :deporte="i" v-on:seleccionarFavorito="seleccionarFavorito"/> 
            </li>
        </ul>
        <h1 style="color:green">El favorito es : {{favorito}}</h1>
    </div>
</template>
<script>
import Deporte from "./Deporte.vue";
export default {
    name : "Deportes",
    components : {
        Deporte,
    },
    data(){
        return {
            deportes : ["Canicas", "Futbol", "Baloncesto", "Volley-Ball", "Padel"],
            favorito : ""
        }
    }, methods : {
        seleccionarFavorito(deporte){
            console.log(deporte);
            this.favorito = deporte;
        }
    }
}
</script>