<template>
    <md-layout class="load full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img class="logo animated tada" src="../assets/logo.svg">
            <md-spinner :md-size="150" :md-stroke="1.5" md-indeterminate />
        </div>
    </md-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Load',
    async created() {
        await this.loadUser()
        if (this.isLoggedUser) {
            this.$router.push('welcome')
        } else {
            this.$router.push('login')
        }
    },
    computed: {
        ...mapGetters('auth', ['isLoggedUser'])
    },
    methods: {
        ...mapActions('auth', ['loadUser'])
    }
}
</script>

<style scoped>
.load .box img {
    padding: 0 0 50px 0;
}
</style>
