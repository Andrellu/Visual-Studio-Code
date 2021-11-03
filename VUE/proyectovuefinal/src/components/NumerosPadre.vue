<template>
    <div>
        <h1>Numeros Padre</h1>
        <button @click="generarBoton">Nuevo Número</button>
        <button @click="disminuirBoton">Quitar Número</button>
        <div v-for="i in numeros" :key="i">
            <NumerosHijo v-on:aumentarSuma="aumentarSuma" v-on:disminuirSuma="disminuirSuma"/>
        </div>
        <h2>La suma es : {{suma}}</h2>
    </div>
</template>
<script>
import NumerosHijo from "./NumerosHijo.vue";
export default {
    name : "NumerosPadre",
    components : {
        NumerosHijo
    },
    data(){
        return {
            suma : 0,
            numeros : 0
        }
    },
    methods : {
        generarBoton(){
            this.numeros++;
        },
        disminuirBoton(){
            this.numeros--;
        },
        aumentarSuma(numero){
            console.log(numero);
            this.suma += numero;
        },
        disminuirSuma(numero){
            this.suma -=numero;
        }
    }
}
</script>