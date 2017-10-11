<template>
    <div class="inputTextArea">
        <textarea :value="value" :placeholder="placeholder" @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'InputTextArea',
    props: {
        value: {
            type: String
        },
        placeholder: {
            type: String
        }
    },
    methods: {
        onInput: function(event) {
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

.inputTextArea textarea::placeholder {
    color: #fc4349;
}

.inputTextArea textarea::-moz-placeholder {
    opacity: 1;
}

.inputTextArea textarea:focus {
    outline: none;
    box-shadow: 0 0 30px #8a4447;
}
</style>
