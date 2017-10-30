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
    margin: 0;
    text-align: center;
    font-size: 64px;
    line-height: 69px;
    color: #2c3e50;
}

.infoBox .message {
    display: block;
    margin-top: 10px;
    text-align: center;
    font-size: 32px;
    line-height: 35px;
    color: #ffffff;
}

@media (max-width: 600px) {
    .infoBox {
        margin: 20px;
    }

    .infoBox .title {
        font-size: 32px;
        line-height: 35px;
    }

    .infoBox .message {
        margin: 5px 20px;
        font-size: 16px;
        line-height: 17px;
    }
}
</style>
