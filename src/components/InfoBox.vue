<template>
    <div class="infoBox animated bounce">
        <span class="title" v-html="title" />
        <span class="message" v-html="message" />
    </div>
</template>

<script>
export default {
    name: 'InfoBox',
    props: {
        title: {
            type: String
        },
        message: {
            type: String
        }
    }
}
</script>

<style scoped>
.infoBox {
    margin: 40px;
}

.infoBox .title {
    text-align: center;
    font-size: 64px;
    color: #2c3e50;
}

.infoBox .message {
    display: block;
    margin-top: 20px;
    text-align: center;
    font-size: 32px;
    color: #ffffff;
}
</style>
