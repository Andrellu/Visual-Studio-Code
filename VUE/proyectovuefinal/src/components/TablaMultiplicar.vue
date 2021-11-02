<template>
    <div>
        <h1>Tabla de multiplicar</h1>
        <main class="row justify-content-center">
            <label>Introduce numero : </label>
            <input type="text"/> <hr/>
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
                resultados : []
            }
        }, 
    }
</script>