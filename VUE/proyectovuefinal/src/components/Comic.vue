<template>
   <div>
       <h1>El comic es : {{comic.titulo}}</h1>
       <img :src="comic.imagen"/>
       <h2>{{comic.descripcion}}</h2>
       <button @click="comicFavorito">Favorito</button>
       <button>Modificar</button>
       <button @click="eliminarComic">Eliminar</button>
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
            console.log(this.indice);
            this.$emit("eliminar", this.indice);
        }
    }

}
</script>

<style scoped>
    img{
        width : 325px;
    }
</style>
