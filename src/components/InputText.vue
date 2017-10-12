<template>
    <div class="inputText">
        <input v-if="mask" :type="type" :value="value" :placeholder="placeholder" v-mask="mask" @input="onInput">
        <input v-else :type="type" :value="value" :placeholder="placeholder" @input="onInput">
        <span v-if="mask && maskPlaceholder" class="mask-placeholder">{{ maskPlaceholder }}</span>
    </div>
</template>

<script>
export default {
    name: 'InputText',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String
        },
        placeholder: {
            type: String
        },
        mask: {
            type: String
        },
        maskPlaceholder: {
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
.inputText {
    position: relative;
}

.inputText .mask-placeholder {
    position: absolute;
    opacity: 0.3;
    right: 20px;
    top: 22px;
    line-height: 20px;
    font-size: 16px;
    color: #2c3e50;
}

.inputText input {
    display: block;
    width: 100%;
    height: 64px;
    margin: 20px 0;
    padding: 20px;
    border: none;
    border-radius: 6px;
    font-family: 'Archivo';
    font-size: 16px;
    color: #fc4349;
}

.inputText input::placeholder {
    color: #fc4349;
}

.inputText input::-moz-placeholder {
    opacity: 1;
}

.inputText input:focus {
    outline: none;
    box-shadow: 0 0 30px #8a4447;
}
</style>
