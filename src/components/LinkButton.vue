<template>
    <div :tabindex="isLoading ? -1 : 0" :class="[isLoading ? 'loading' : '', 'linkButton']" @keyup.enter="onClick" @keyup.space="onClick" @click="onClick">
        <md-ink-ripple />
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LinkButton',
    props: {
        isLoading: {
            type: Boolean
        }
    },
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
.linkButton:focus,
.linkButton.loading {
    background-color: rgba(255, 255, 255, 0.05);
}

.linkButton.loading {
    pointer-events: none;
    animation: fadeIn 1s infinite alternate;
}

@keyframes fadeIn {
    from {
        opacity: 0.75;
    }
    to {
        opacity: 0.25;
    }
}

@media (max-width: 600px) {
    .linkButton {
        padding: 10px;
        margin: 5px 0;
    }
}
</style>
