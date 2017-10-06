<template>
  <div id="app">
    <div class="content">
      <div class="box">
        <img src="./assets/logo.svg">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  display: table;
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(#fc4349, #8f4352);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.content {
  display: table-cell;
  vertical-align: middle;
}

.box {
  margin: auto;
  width: 30em;
}
</style>
