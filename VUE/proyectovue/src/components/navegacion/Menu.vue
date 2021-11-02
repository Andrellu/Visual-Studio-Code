<template>
    <div>
        <nav>
            <ul id="menu">
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/cine">Cine</router-link></li>
                <li><router-link to="/musica">Música</router-link></li>
                <li><router-link to="/television">Televisión</router-link></li>
                <li><router-link to="/ciclovida">CicloVida</router-link></li>
                <li><router-link to="/directivas">Directivas</router-link></li>
                <li><router-link to="/juegos">Juegos</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name : "Menu"
    }
</script>

