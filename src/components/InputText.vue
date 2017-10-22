<template>
    <div class="inputText">
        <input v-if="mask" :type="type" :value="value" :placeholder="placeholder" :name="fieldName" v-mask="mask" v-validate="validation" @input="onInput">
        <input v-else :type="type" :value="value" :placeholder="placeholder" :name="fieldName" v-validate="validation" @input="onInput">
        <span v-if="mask && maskPlaceholder" class="mask-placeholder">{{ maskPlaceholder }}</span>
        <div v-if="errors.has(fieldName)" class="validation-error">{{ errors.first(fieldName) }}</div>
    </div>
</template>

<script>
export default {
    name: 'InputText',
    inject: ['$validator'],
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
        name: {
            type: String
        },
        mask: {
            type: String
        },
        maskPlaceholder: {
            type: String
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
.inputText {
    position: relative;
}

.inputText .validation-error {
    opacity: 0.8;
    margin: -10px 10px 10px 10px;
    line-height: 20px;
    font-size: 16px;
    text-align: end;
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

.inputText input[type=email] { 
    text-transform: lowercase;
}

.inputText input[type=email]::placeholder { 
    text-transform: none;
}

.inputText input::placeholder {
    color: #fc4349;
}

.inputText input::-moz-placeholder {
    opacity: 1;
}

.inputText input:focus {
    outline: none;
    box-shadow: 0 0 40px #8a4447;
}
</style>
