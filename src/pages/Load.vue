<template>
    <md-layout class="full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <md-spinner :md-size="150" :md-stroke="1.5" md-indeterminate />
        </div>
    </md-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Slogan from '@/components/Slogan'

export default {
    name: 'Load',
    components: {
        Slogan
    },
    async created() {
        await this.loadUser()
        if (this.isLoggedUser) {
            this.$router.push('welcome')
        } else {
            this.$router.push('login')
        }
    },
    computed: {
        ...mapGetters(['isLoggedUser'])
    },
    methods: {
        ...mapActions(['loadUser'])
    }
}
</script>

<style>

</style>
