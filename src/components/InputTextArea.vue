<template>
    <div class="inputTextArea">
        <textarea :class="[isTransparent ? 'transparent' : '', isBig ? 'big' : '']" :value="value" :placeholder="placeholder" :name="fieldName" :disabled="disabled" v-validate="validation" @input="onInput" />
        <div v-if="errors.has(fieldName)" class="validation-error">{{ errors.first(fieldName) }}</div>
    </div>
</template>

<script>
export default {
    name: 'InputTextArea',
    inject: ['$validator'],
    props: {
        isTransparent: {
            type: Boolean
        },
        isBig: {
            type: Boolean
        },
        value: {
            type: String
        },
        placeholder: {
            type: String
        },
        name: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        validation: {
            type: [String, Object],
            default: ''
        }
    },
    computed: {
        fieldName() {
            return (this.name || this.placeholder).toLowerCase()
        }
    },
    methods: {
        onInput(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style scoped>
.inputTextArea .validation-error {
    opacity: 0.8;
    margin: -10px 10px 10px 10px;
    line-height: 20px;
    font-size: 16px;
    text-align: end;
}

.inputTextArea textarea {
    display: block;
    resize: none;
    width: 100%;
    height: 128px;
    margin: 20px 0;
    padding: 20px;
    border: none;
    border-radius: 6px;
    font-family: 'Archivo';
    font-size: 16px;
    color: #fc4349;
}

.inputTextArea textarea[disabled] {
    opacity: 0.5;
}

.inputTextArea textarea.big {
    height: 380px;
}

.inputTextArea textarea.transparent {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
}

.inputTextArea textarea::placeholder {
    color: #fc4349;
}

.inputTextArea textarea.transparent::placeholder {
    color: #ffffff;
}

.inputTextArea textarea::-moz-placeholder {
    opacity: 1;
}

.inputTextArea textarea:focus {
    outline: none;
    box-shadow: 0 0 40px #8a4447;
}

.inputTextArea textarea.transparent:focus {
    box-shadow: 0 0 40px #ff8287;
}

@media (max-width: 600px) {
    .inputTextArea textarea {
        height: 112px;
        margin: 16px 0;
        padding: 16px;
    }

    .inputTextArea textarea.big {
        height: 325px;
    }
}
</style>
