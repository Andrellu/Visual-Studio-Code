<template>
   <div>
       <h1>El comic es : {{comic.titulo}}</h1>
       <img :src="comic.imagen"/>
       <h2>{{comic.descripcion}}</h2>
   </div>
    
</template>
<script>
export default {
    name : "Comic",
    props : ["comic"],

}
</script>