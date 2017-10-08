<template>
    <div class="slogan">
        <label>{{ message }}</label>
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
.slogan label {
    display: block;
    font-size: 22.6px;
    margin: 21.5px 0 60px 0;
}
</style>
