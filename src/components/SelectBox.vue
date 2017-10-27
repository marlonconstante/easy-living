<template>
    <div tabindex="0" :class="[isSelected ? 'active' : '', 'selectBox']" @keyup.enter="onClick" @keyup.space="onClick" @click="onClick">
        {{ labelValue }}
        <div class="circle" />
    </div>
</template>

<script>
export default {
    name: 'SelectBox',
    props: {
        fieldName: {
            type: String
        },
        value: {
            type: Object,
            required: true
        },
        selectedValues: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        labelValue() {
            return this.fieldName ? this.value[this.fieldName] : this.value
        },
        isSelected() {
            return this.indexOf != -1
        },
        indexOf() {
            return this.selectedValues.indexOf(this.value)
        }
    },
    methods: {
        onClick(event) {
            if (this.isSelected) {
                this.$delete(this.selectedValues, this.indexOf)
            } else {
                this.selectedValues.push(this.value)
            }
        }
    }
}
</script>

<style scoped>
.selectBox {
    position: relative;
    cursor: pointer;
    background: transparent;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    width: 440px;
    height: 64px;
    margin: 5px;
    padding: 23px;
    line-height: 17px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;
    text-transform: uppercase;
}

.selectBox:hover,
.selectBox:focus {
    background-color: rgba(255, 255, 255, 0.05);
}

.selectBox.active {
    background-color: rgba(255, 255, 255, 0.1);
}

.selectBox .circle {
    display: none;
}

.selectBox.active .circle {
    display: block;
    position: absolute;
    mix-blend-mode: hard-light;
    right: 24px;
    top: 24px;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    box-shadow: 0 0 0 5px rgba(143, 67, 82, 0.6);
    background: rgba(255, 255, 255, 0.3);
}
</style>
