<template>
    <md-layout class="gridSelect">
        <div v-if="isLoading">
            <md-spinner :md-size="0" :md-stroke="1.5" md-indeterminate />
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
    margin: 5px auto;
    padding: 70px 0 55px 0;
}

.gridSelect .gridSelectBox {
    display: grid;
    width: 100%;
    max-width: 450px;
}

.gridSelect .md-spinner {
    width: 150px !important;
    height: 150px !important;
}

@media (max-width: 600px) {
    .gridSelect {
        margin: 8px;
        padding: 38px 0 8px 0;
    }

    .gridSelect .gridSelectBox {
        max-width: 584px;
    }

    .gridSelect .md-spinner {
        width: 75px !important;
        height: 75px !important;
    }
}

@media (min-width: 601px) and (max-width: 960px) {
    .gridSelect {
        width: 450px;
    }
}

@media (min-width: 961px) and (max-width: 1440px) {
    .gridSelect {
        width: 900px;
    }
}

@media (min-width: 1441px) {
    .gridSelect {
        width: 1350px;
    }
}
</style>
