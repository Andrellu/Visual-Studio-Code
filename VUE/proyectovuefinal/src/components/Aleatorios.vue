<template>
    <div>
        <ul >
            <li v-for="num in aleatorios" :key="num"><router-link :to="'/numsTriple/' + num">{{num}}</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name : "Aleatorios",
    data(){
        return{
            aleatorios : []
        }
    },
    mounted(){
        this.generarAlea();
    },
    methods : {
        generarAlea(){
            for(var i = 0; i < 10;i++){
                var ale = parseInt(Math.random()*100);
                this.aleatorios.push(ale);
                console.log(this.aleatorios[i]);
            }
        }
    }
}
</script>