<template>
    <div tabindex="0" class="linkButton" @keyup.enter="onClick" @keyup.space="onClick" @click="onClick">
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
    outline: none;
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
}

.linkButton:hover,
.linkButton:focus {
    background-color: rgba(255, 255, 255, 0.05);
}
</style>
