<template>
    <div>
        <h1>Primer componente VUE</h1>
        <h2>
            {{saludo}}
        </h2>
         <h2>
            {{nombre}}
        </h2>
        <img src="./../assets/images/ImagenDos.jpg" />
    </div>
</template>

<script>
export default {
    //AQUI SE DECLARAN LAS ZONAS DEL COMPONENTE
    name : "HolaMundo",
    data() {
        return {
        //     variable1 : "valor1",
        //     miArray : []
            saludo : "Mi primer componente!!!",
            nombre : "Alumno VUE!!!"
        };
    }
}
</script>

<style scoped>
    @import './../assets/css/estilosvue.css';
</style>