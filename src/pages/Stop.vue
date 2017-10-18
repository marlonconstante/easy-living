<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-stop">
                <div class="title">Where do you need us to stop?</div>
                <grid-select v-model="stores" fieldName="name" />
                <round-button>OK</round-button>
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
    beforeCreate() {
        const storesRef = Firebase.database().ref('stores')
        this.$bindAsArray('stores', storesRef)
    }
}
</script>

<style scoped>
.box-stop {
    margin: 152px 0 80px 0;
}
</style>
