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
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

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
    background: -webkit-linear-gradient(135deg, #fc4349, #8f4352);
    background: -o-linear-gradient(135deg, #fc4349, #8f4352);
    background: -moz-linear-gradient(135deg, #fc4349, #8f4352);
    background: linear-gradient(135deg, #fc4349, #8f4352);
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
