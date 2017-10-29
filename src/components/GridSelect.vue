<template>
    <md-layout class="gridSelect" md-align="center">
        <div v-if="isLoading">
            <md-spinner :md-size="150" :md-stroke="1.5" md-indeterminate />
        </div>
        <div class="gridSelectBox" v-else v-for="item in value">
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

.gridSelect .gridSelectBox {
    display: grid;
    width: 100%;
    max-width: 440px;
}

@media (max-width: 600px) {
    .gridSelect {
        margin: 8px;
        padding: 38px 0 8px 0;
    }
}
</style>
