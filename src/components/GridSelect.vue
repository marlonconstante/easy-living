<template>
    <md-layout class="gridSelect">
        <div v-for="item in value">
            <select-box :value="item" :fieldName="fieldName" @selectedValue="onSelectedValue" @unselectedValue="onUnselectedValue" />
        </div>
    </md-layout>
</template>

<script>
import SelectBox from '@/components/SelectBox'

export default {
    name: 'GridSelect',
    components: {
        SelectBox
    },
    data() {
        return {
            selectedValues: []
        }
    },
    props: {
        fieldName: {
            type: String
        },
        value: {
            type: Array,
            required: true
        }
    },
    methods: {
        onSelectedValue(value) {
            this.selectedValues.push(value)
        },
        onUnselectedValue(value) {
            this.selectedValues.pop(value)
        }
    }
}
</script>

<style scoped>
.gridSelect {
    margin: 5px;
    justify-content: center;
}
</style>
