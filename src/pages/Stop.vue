<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-stop">
                <div class="title">Where do you need us to stop?</div>
                <grid-select v-model="stores" fieldName="name" :isLoading="isLoading" :selectedValues="selectedStores" />
                <round-button :disabled="!isSelectedStore">OK</round-button>
            </div>
        </md-layout>
    </div>
</template>

<script>
import Firebase from 'firebase'
import HeaderBar from '@/components/HeaderBar'
import GridSelect from '@/components/GridSelect'
import RoundButton from '@/components/RoundButton'

export default {
    name: 'Stop',
    components: {
        HeaderBar,
        GridSelect,
        RoundButton
    },
    data() {
        return {
            stores: [],
            selectedStores: []
        }
    },
    computed: {
        isLoading() {
            return this.stores.length == 0
        },
        isSelectedStore() {
            return this.selectedStores.length > 0
        }
    },
    created() {
        setTimeout(() => {
            const storesRef = Firebase.database().ref('stores')
            this.$bindAsArray('stores', storesRef)
        }, 500)
    }
}
</script>

<style scoped>
.box-stop {
    margin: 152px 0 80px 0;
}
</style>
