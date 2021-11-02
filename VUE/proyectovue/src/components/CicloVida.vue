<template>
    <div>
        <h1>Ejemplo ciclo de vida</h1>
        <h2>{{saludo}}</h2>
        <button @click="cambiarSaludo()">Cambiar saludo</button>
    </div>
</template>

<script>
    export default {
        name :  "CicloVida",
        methods:{
            cambiarSaludo(){
                this.saludo = "He cambiado sin state";
            }
        },
        data(){
            return {
                saludo : "Hola Hooks!!!"
            };
        }, mounte(){
            console.log("Componente Montado");
        }, created(){
            console.log("Componente Creado");
        }, destroyed() {
            console.log("Componente eliminado");
        }, updated() {
            console.log("Componente Actualizado");
        }
    }
</script>