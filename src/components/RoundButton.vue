<template>
    <div class="roundButton">
        <div class="content">
            <md-button :class="[isInverted ? 'inverted' : '', 'md-fab']" :disabled="disabled || isLoading" @click="onClick">
                <md-icon>{{ iconClass }}</md-icon>
                <slot />
            </md-button>
            <div class="spinner" v-if="isLoading">
                <md-spinner :md-size="0" :md-stroke="1" md-indeterminate />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoundButton',
    props: {
        iconClass: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        isInverted: {
            type: Boolean
        },
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
.roundButton .content {
    position: relative;
    display: inline-block;
    margin: 15px;
}

.roundButton .content .spinner {
    position: absolute;
    top: 0;
    left: 0;
}

.roundButton .content .spinner .md-spinner {
    width: 91px !important;
    height: 91px !important;
}

.roundButton .content .md-theme-default.md-button.md-fab {
    margin: 0;
    width: 91px;
    height: 91px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 0 rgba(0, 0, 0, 0.1);
    font-size: 24px;
    font-weight: 700;
    color: #fc4349;
    background-color: #2c3e50;
}

.roundButton .content .md-theme-default.md-button.md-fab[disabled] {
    opacity: 0.5;
}

.roundButton .content .md-theme-default.md-button.md-fab:hover {
    background-color: #2c3e50;
}

.roundButton .content .md-theme-default.md-button.md-fab:hover,
.roundButton .content .md-theme-default.md-button.md-fab:focus {
    border: 2px solid rgba(0, 0, 0, 0.5);
}

.roundButton .content .md-theme-default.md-button.md-fab.inverted {
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #2c3e50;
    background-color: #d2434d;
}

.roundButton .content .md-theme-default.md-button.md-fab.inverted:hover {
    background-color: #d2434d;
}

.roundButton .content .md-theme-default.md-button.md-fab.inverted:hover,
.roundButton .content .md-theme-default.md-button.md-fab.inverted:focus {
    border: 2px solid rgba(0, 0, 0, 0.4);
}

.roundButton .content .md-icon {
    width: 48px;
    min-width: 48px;
    height: 48px;
    min-height: 48px;
    font-size: 48px;
}

@media (max-width: 600px) {
    .roundButton .content {
        margin: 10px;
    }

    .roundButton .content .spinner .md-spinner {
        width: 64px !important;
        height: 64px !important;
    }

    .roundButton .content .md-theme-default.md-button.md-fab {
        width: 64px;
        height: 64px;
        font-size: 16px;
    }

    .roundButton .content .md-icon {
        width: 32px;
        min-width: 32px;
        height: 32px;
        min-height: 32px;
        font-size: 32px;
    }
}
</style>
