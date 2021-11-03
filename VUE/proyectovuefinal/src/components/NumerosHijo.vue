<template>
    <div>
        <h3>El numero es : {{num}}</h3>
        <button @click="Suma(num)">Sumar</button>
        <button @click="Restar(num)">Restar</button>
    </div>
</template>
<script>
    export default {
        name : "NumerosHijo",
        data(){
            return {
                num : 0
            }
        }, mounted () {
            var numAleatorio = parseInt(Math.random()*100)
            this.num = numAleatorio;
        },
        methods : {
            Suma(){
                this.$emit("aumentarSuma", this.num);
            },
            Restar(){
                this.$emit("disminuirSuma", this.num);
            }
        }
    }
</script>