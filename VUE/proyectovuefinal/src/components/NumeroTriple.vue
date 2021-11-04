<template>
    <div>
            <h1>Soy Numeros Triple</h1>    
            <h2>{{num}}</h2>
            <h2>{{numTriple}}</h2>
    </div>
</template>
<script>
    export default {
        name : "NumeroTriple",
        mounted(){
            this.calcular();
        },
        watch:{
            '$route.params.num'(valornuevo, valorviejo){
                if(valornuevo != valorviejo){
                    this.calcular()
                }
            }
        },
        methods :{
            calcular(){
                this.num = this.$route.params.num;
                this.numTriple = parseInt(this.num)*3;
            }
        },
        data(){
            return{
                num : 0,
                numTriple : 0
            }
        }
    }
</script>