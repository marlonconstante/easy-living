<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Archivo:400,500i,700');

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
    font-family: 'Archivo';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background: #fc4349;
    background: -webkit-linear-gradient(#fc4349, #8f4352);
    background: -o-linear-gradient(#fc4349, #8f4352);
    background: -moz-linear-gradient(#fc4349, #8f4352);
    background: linear-gradient(#fc4349, #8f4352);
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
