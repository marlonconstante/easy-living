<template>
    <div class="slogan animated fadeInUp">
        <span>{{ message }}</span>
    </div>
</template>

<script>
export default {
    name: 'Slogan',
    data() {
        return {
            message: 'Everything you need. We deliver.'
        }
    }
}
</script>

<style scoped>
.slogan span {
    display: block;
    font-size: 22.6px;
    margin: 21.5px 0 60px 0;
}

@media (max-width: 600px) {
    .slogan span {
        font-size: 16px;
        margin: 16px 0 32px 0;
    }
}
</style>
