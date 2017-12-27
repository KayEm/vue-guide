<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul class="horizontal">
      <li class="horizontal"><router-link to="/">Home</router-link></li>
      <li class="horizontal"><router-link to="/Introduction">Introduction</router-link></li>
      <li class="horizontal"><router-link to="/Advanced">Advanced features</router-link></li>
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
h1, h2 {
  font-weight: normal;
}
ul.horizontal {
  list-style-type: none;
  padding: 0;
}
li.horizontal {
  display: inline-block;
  margin: 0 10px;
}
a {
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
