<template>
    <div>
        <nav>
            <ul id="menu">
                <li><router-link to="/tablaMultiplicar">Tabla Multiplicar</router-link></li>
                <li><router-link to="/deportes">Deportes</router-link></li>
                <li><router-link to="/numerosPadre">NumerosP/H</router-link></li>
                <li><router-link to="/comic">Comic</router-link></li>
                <li v-for="num in valores" :key="num"><router-link :to="'/numerosdoble/'+num">Numeros doble{{num}}</router-link></li>
                <li><router-link to="/numerosdoble">Numeros doble sin nada</router-link></li>
                <li><router-link to="/numerosaletarios">Numero Aleatorio</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name : "Menu",
        data(){
            return{
                valores : [66, 99, 12],
                numAleatorios : []
            }
        },mounted(){
            this.generarNumeros();
        },
        methods : {
            generarNumeros(){
                for(var i = 0; i < 10; i++){
                    var numAleatorio = parseInt(Math.random()*100);
                    console.log(numAleatorio);
                    this.numAleatorios.push(numAleatorio);
                }
            }
        }
    }
</script>

<style scoped>
    ul#menu li {
        display: inline;
        padding-right: 10px;
    }
</style>