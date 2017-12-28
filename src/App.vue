<template>
  <div id="app">
    <router-link class="nav-link" to="/"><img src="./assets/logo.png"></router-link>
    <ul class="nav nav-fill flex-column flex-sm-row">
      <li class="nav-item"><router-link class="nav-link" to="/Introduction">Introduction</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/Template">Template syntax</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/PropsWatchers">Computed properties & watchers</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/ClassStyleBindings">Class & style bindings</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/ConditionalRendering">Conditional rendering</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/ListRendering">List rendering</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/EventHandling">Event handling</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/FormInputBindings">Form input bindings</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a, a:hover {
  color: #42b983;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  grid-auto-rows: minmax(30px, auto);
  text-align: left;
}
</style>
