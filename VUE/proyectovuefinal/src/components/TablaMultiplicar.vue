<template>
  <div>
    <h1>Tabla de multiplicar de {{num}}</h1>
    <label>Introduzca un numero: </label>
    <input type="number" v-model="num" />
    <br />
    <button type="button" @click="calcularTabla()">
      Mostrar tabla de multiplicar
    </button>
    <hr />

    <table id="tabla" border="2">
      <thead>
        <tr>
            <th style="color:green">Operación</th>
            <th style="color:green">Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in solucion" :key="i" v-html="i">{{i}}</tr>
        <!-- <tr v-for="i in 10" :key="i">
            <td>{{ num }} x {{ i }}</td>
            <td>{{ num * i }}</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      num: 0,
      solucion: [],
    };
  },
  methods: {
    calcularTabla() {
        //Se vacia el array antes de hacer nada
        this.solucion = [];
      // SOLO UN ARRAY :)
      for (var i = 0; i <= 10; i++) {
        var solu = parseInt(this.num) * i;
        var dibujo =
            "<td style='color:red'>" + this.num + "x" + i + "</td>" + "<td style='color:blue'>" + solu + "</td>";
        this.solucion.push(dibujo);
      }
      // ESTARIA GUAY UN RETURN
      return this.solucion;
    },
  },
};
</script>
