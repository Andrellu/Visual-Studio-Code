<template>
    <div>
        <h1>Soy Directivas VUE</h1>
        <ul v-if="pelicilas.length > 0">
            <li v-for="pelicula in pelicilas" :key="pelicula">
                {{pelicula}}
            </li>
        </ul><hr/>
        <label>Introduce numero : </label>
        <input type="text" v-model="numero"/><br/>
        <h3 v-if="numero > 0" style="color:green">Positivo</h3>
        <h3 v-else-if="numero == 0" style="color:blue">Cero</h3>
        <h3 v-else style="color:red">Negativo</h3>
        <hr/><label>Nombre : </label>
        <input type="text" v-model="nombre"/><br/>
        <label>Edad : </label>
        <input type="text" v-model="edad"/><br/>
        <!-- Impirimir variables -->
        <h1>
            {{nombre}} , {{edad}}
        </h1>
        <h1>
            {{$data}}
        </h1>

    </div>
</template>
<script>
export default {
    name : "Directivas",
    data(){
        return {
            nombre : "",
            edad : 0,
            numero : 0,
            pelicilas : ["Pokemon", "Koko", "Up", "Wall-E", "Inside Out"]
        }
    }
}
</script>