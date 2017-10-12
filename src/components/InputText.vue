<template>
    <div class="inputText">
        <input :type="type" :value="value" :placeholder="placeholder" v-mask="mask" @input="onInput">
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
            type: String,
            default: ''
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
