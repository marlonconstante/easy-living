<template>
    <div :class="[isSelected ? 'active' : '', 'selectBox']" @click="onClick">
        {{ labelValue }}
        <div class="circle" />
    </div>
</template>

<script>
export default {
    name: 'SelectBox',
    data() {
        return {
            isSelected: false
        }
    },
    computed: {
        labelValue() {
            return this.fieldName ? this.value[this.fieldName] : this.value
        }
    },
    props: {
        fieldName: {
            type: String
        },
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        onClick(event) {
            this.isSelected = !this.isSelected
            if (this.isSelected) {
                this.$emit('selectedValue', this.value)
            } else {
                this.$emit('unselectedValue', this.value)
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
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    width: 440px;
    height: 64px;
    margin: 5px;
    padding: 23px;
    line-height: 17px;
    font-size: 16px;
    text-align: start;
    text-transform: uppercase;
}

.selectBox:hover,
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
