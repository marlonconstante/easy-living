<template>
    <div class="inputTextArea">
        <textarea :class="[isTransparent ? 'transparent' : '', isBig ? 'big' : '']" :value="value" :placeholder="placeholder" :name="name" @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'InputTextArea',
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
    box-shadow: 0 0 30px #8a4447;
}

.inputTextArea textarea.transparent:focus {
    box-shadow: 0 0 30px #ff8287;
}
</style>
