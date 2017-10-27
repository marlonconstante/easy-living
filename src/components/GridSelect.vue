<template>
    <md-layout class="gridSelect" md-align="center">
        <div v-if="isLoading">
            <md-spinner :md-size="150" :md-stroke="1.5" md-indeterminate />
        </div>
        <div v-else v-for="item in value">
            <select-box :value="item" :selectedValues="selectedValues" :fieldName="fieldName" />
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
        },
        isLoading: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
.gridSelect {
    margin: 5px;
    padding: 70px 0 55px 0;
}
</style>
