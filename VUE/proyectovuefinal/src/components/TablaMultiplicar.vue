<template>
    <div>
        <main class="row justify-content-center">
            <input type="number" v-model="numero"/>
            <h1>Tabla de multiplicar del: {{numero}}</h1>
            <hr/>
            <table border="2">
                <thead>
                    <tr>
                        <th>Operación</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="i in 10" :key="i">
                        <td>{{numero}} x {{i}}</td>
                        <td>{{numero*i}}</td>
                </tr>
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
                numero : 0
            }
        }
    }
</script>