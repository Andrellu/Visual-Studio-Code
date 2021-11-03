<template>
   <div>
       <h1>El comic es : {{comic.titulo}}</h1>
       <img :src="comic.imagen"/>
       <h2>{{comic.descripcion}}</h2>
       <button @click="comicFavorito">Favorito</button>
       <button>Modificar</button>
       <button>Eliminar</button>
   </div>
    
</template>
<script>
export default {
    name : "Comic",
    props : ["comic"],
    methods : {
        comicFavorito(){
            this.$emit("favorito", this.comic);
        }
    }

}
</script>

<style scoped>
    img{
        width : 325px;
    }
</style>
