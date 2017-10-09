<template>
    <div class="infoBox">
        <label class="title">{{ title }},</label>
        <label class="name">{{ name }}.</label>
        <label class="message">{{ message }}.</label>
    </div>
</template>

<script>
export default {
    name: 'InfoBox',
    props: {
        title: {
            type: String
        },
        name: {
            type: String
        },
        message: {
            type: String
        }
    }
}
</script>

<style scoped>
.infoBox label.title,
.infoBox label.name {
    text-align: center;
    font-size: 64px;
    color: #2c3e50;
}

.infoBox label.name {
    font-weight: 700;
}

.infoBox label.message {
    display: block;
    margin-top: 20px;
    text-align: center;
    font-size: 32px;
    color: #ffffff;
}
</style>
