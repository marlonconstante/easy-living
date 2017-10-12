<template>
    <div class="roundButton">
        <md-button :class="[isInverted ? 'inverted' : '', 'md-fab']" @click="onClick">
            <md-icon class="md-size-2x">{{ iconClass }}</md-icon>
            <slot />
        </md-button>
    </div>
</template>

<script>
export default {
    name: 'RoundButton',
    props: {
        iconClass: {
            type: String
        },
        isInverted: {
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
.roundButton .md-button.md-fab {
    margin: 30px;
    width: 91px;
    height: 91px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 0 rgba(0, 0, 0, 0.1);
    font-size: 24px;
    font-weight: 700;
    color: #fc4349;
    background-color: #2c3e50;
}

.roundButton .md-button.md-fab:hover {
    background-color: #2c3e50;
}

.roundButton .md-button.md-fab.inverted {
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #2c3e50;
    background-color: #d2434d;
}

.roundButton .md-button.md-fab.inverted:hover {
    background-color: #d2434d;
}
</style>
