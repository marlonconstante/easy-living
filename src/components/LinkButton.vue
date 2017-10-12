<template>
    <div class="linkButton" @click="onClick">
        <md-ink-ripple />
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LinkButton',
    methods: {
        onClick(event) {
            this.$emit('click', event)
        }
    }
}
</script>

<style scoped>
.linkButton {
    cursor: pointer;
    position: relative;
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
}
</style>
