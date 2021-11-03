<template>
    <div>
        <nav>
            <ul id="menu">
                <li><router-link to="/tablaMultiplicar">Tabla Multiplicar</router-link></li>
                <li><router-link to="/deportes">Deportes</router-link></li>
                <li><router-link to="/numerosPadre">NumerosP/H</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name : "Menu"
    }
</script>

<style scoped>
    ul#menu li {
        display: inline;
        padding-right: 10px;
    }
</style>