<template>
   <div>
       <h1>El comic es : {{comic.titulo}}</h1>
       <img :src="comic.imagen"/>
       <h2 :class="{
           rojo:comic.year <=2000,
           verde:comic.year > 2000
           }">{{comic.year}}}</h2>
       <h2>{{comic.descripcion}}</h2>
       <button @click="comicFavorito()">Favorito</button>
       <button @click="modificarComic()" style="backgroundColor:blue;color:white">Modificar</button>
       <button @click="eliminarComic()" style="backgroundColor:red;color:white">Eliminar</button>
   </div>
    
</template>
<script>
export default {
    name : "Comic",
    props : ["comic", "indice"],
    methods : {
        comicFavorito(){
            this.$emit("favorito", this.comic);
        },
        eliminarComic(){
            //console.log(this.indice);
            this.$emit("eliminar", this.indice);
        },
        modificarComic(){
            //console.log(this.indice);
            this.$emit("modificar", this.indice);
        }
    }
}
</script>

<style scoped>
@import "./../assets/estiloscomic.css";
</style>
