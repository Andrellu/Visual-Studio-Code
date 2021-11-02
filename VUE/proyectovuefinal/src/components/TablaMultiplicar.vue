<template>
    <div>
        <h1>Tabla de multiplicar</h1>
        <main class="row justify-content-center">
            <label>Introduce numero : </label>
            <input type="text" v-model="num"/> 
            <button @click="calcularTabla">Mostrar Tabla</button><hr/>
            <table border="2">
                <thead>
                    <th>Operación</th>
                    <th>Resultado</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </main>
    </div>
</template>

<script>
    export default {
        name : "TablaMultiplicar",
        data(){
            return{
                operaciones : [],
                resultados : [],
                num : 0
            }
        },methods : {
            calcularTabla(){
                var numero = this.num;
                //console.log(numero);
                //var result = [];
                for(var i = 0; i <= 10; i++){
                    var total = parseInt(numero*i);
                    //console.log(total);
                    this.resultados[i] = total;
                    console.log(this.resultados[1]);
                }
            }
        }
    }
</script>