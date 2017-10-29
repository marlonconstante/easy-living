<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-stop">
                <div class="title">Where do you need us to stop?</div>
                <grid-select v-model="stores" fieldName="description" :isLoading="isLoading" :selectedValues="selectedStores" />
                <round-button :disabled="!isSelectedStore" @click="next">OK</round-button>
            </div>
        </md-layout>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
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
            selectedStores: [...this.$store.state.delivery.selectedStores]
        }
    },
    async created() {
        if (!this.isLoadedStores) {
            await this.loadStores()
        }
    },
    computed: {
        ...mapState('delivery', ['stores']),
        ...mapGetters('delivery', ['isLoadedStores']),
        isLoading() {
            return this.stores.length == 0
        },
        isSelectedStore() {
            return this.selectedStores.length > 0
        }
    },
    methods: {
        ...mapActions('delivery', ['loadStores', 'setSelectedStores']),
        next() {
            this.setSelectedStores(this.selectedStores)
            this.$router.push('instruction')
        }
    }
}
</script>

<style scoped>
.box-stop {
    margin: 152px 0 80px 0;
}

@media (max-width: 600px) {
    .box-stop {
        margin: 104px 0 26px 0;
    }
}
</style>
