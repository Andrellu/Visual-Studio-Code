<template>
    <div>
        <h1>Soy Numero</h1>
        <h2 style="color:pink" v-if="mensaje">{{mensaje}}</h2>
        <div v-else>
            <h2 style="color:blue">El numero recibido {{numeros}}</h2>
            <h2 style="color:red">El doble del numero recibido {{dobleNum}}</h2>
        </div>
        <button @click="redirectHome()">Ir a Home</button>
    </div>
</template>
<script>
export default{
    name : "NumerosDobles",
    mounted(){
        if(this.$route.params.id == null){
            this.mensaje = "No se encontraron parametros...0";
        }else{
            this.mostrarDobles();
        }
    }, methods:{
        redirectHome(){
            this.$router.push("/");
        },
        mostrarDobles(){
            this.numeros = this.$route.params.id;
            this.dobleNum = parseInt(this.numeros)*2;
        }
    },
    watch:{
        '$route.params.id'(nextVal, prevVal){
            //console.log("Nuevo : " + nextVal);
            //console.log("Viejo : " + prevVal);
            if(nextVal != prevVal){
                this.mostrarDobles();
            }
        }
    },
    data(){
        return {
            mensaje : null,
            numeros : 0,
            dobleNum : 0
        }
    }
}
</script>
