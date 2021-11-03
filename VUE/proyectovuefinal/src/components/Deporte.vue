<template>
    <div>
        <button @click="seleccionarFavorito(deporte)">Favorito</button>
    </div>
</template>
<script>
export default {
    name : "Deporte",
    props : ["deporte"],
    mounted(){
        console.log(this.deporte);
    }, methods : {
        seleccionarFavorito(depor){
            this.$emit("seleccionarFavorito", depor);
        }
    }, data(){
        return{
        }
    }
}
</script>