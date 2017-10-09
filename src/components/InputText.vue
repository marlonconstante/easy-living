<template>
    <div class="inputText">
        <input :type="type" :value="value" :placeholder="placeholder" @input="updateValue($event.target.value)">
    </div>
</template>

<script>
export default {
    name: 'InputText',
    props: {
        type: {
            type: String
        },
        value: {
            type: String
        },
        placeholder: {
            type: String
        }
    },
    methods: {
        updateValue: function(value) {
            this.$emit('input', value)
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
    border: none;
    border-radius: 6px;
    font-family: 'Archivo';
    font-size: 16px;
    text-indent: 20px;
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
