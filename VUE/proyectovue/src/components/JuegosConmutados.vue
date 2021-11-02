<template>
    <div>
        <h1>Propiedades Conmutadas</h1>
        <ul>
            <li v-for="j in juegosPokemon" :key="j">{{j | mayusculas}}</li>
        </ul>
        <hr/>
        <ul>
            <li v-for="j in juegosRojos" :key="j" v-html="j">{{j}}</li>
        </ul>
    </div>
</template>

<script>
export default {
   name : "JuegosConmutados",
   filters : {
       mayusculas(dato){
           return dato.toUpperCase();
       }
   },
   computed : {
       juegosRojos(){
           var datos =  this.juegosPokemon;
           for(var i = 0; i < datos.length; i++){
               var juego = datos[i];
               juego = "<span style='color:red'>" + juego + "</span>";
               datos [i] = juego;
           }
           return datos;
       }
   },
   data(){
       return{
           juegosPokemon : ["Edición Rojo/Amarillo/Azul", "Edición Plata/Oro", "Edición Rojo Fuego/Verde Hoja", "Edición Zafiro/Rubí/Esmeralda", "Edicion Perla/Diamante/Platino", "Edición Corazón de Oro/Alma de Plata", "Edición Negra/Blanca", "Edición Negro 2/Blanco 2", "Edición X/Y", "Edición Zafiro Alfa/Rubi Omega", "Edición Sol/Luna", "Edición Ultra Sol/Ultra Luna", "Edición Espada/Escudo", "Edición Diamante Brillante/Perla Reluciente"]
       }
   }
}
</script>