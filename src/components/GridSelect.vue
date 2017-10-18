<template>
    <md-layout class="gridSelect">
        <div v-for="item in value">
            <select-box :value="item" :fieldName="fieldName" @selectedValue="onSelectedValue" @unselectedValue="onUnselectedValue" />
        </div>
        <div v-if="isLoading">
            <md-spinner :md-size="150" :md-stroke="1.5" md-indeterminate />
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
    props: {
        fieldName: {
            type: String
        },
        value: {
            type: Array,
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
        isLoading() {
            return this.value.length == 0
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
    padding: 70px 0 55px 0;
    justify-content: center;
}
</style>
