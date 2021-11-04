<template>
  <div id="app">
    <Menu/>
    <hr/>
    <router-view></router-view>
    <div>
      <Aleatorios/>
    </div>
  </div>
</template>

<script>
import Aleatorios from "./components/Aleatorios.vue";
import Menu from "./components/Menu.vue";
export default {
  name: 'App',
  components: {
    Menu,
    Aleatorios
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
