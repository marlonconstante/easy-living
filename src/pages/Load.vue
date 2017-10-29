<template>
    <md-layout class="load full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img class="logo animated tada" src="../assets/logo.svg">
            <md-spinner :md-size="0" :md-stroke="1.5" md-indeterminate />
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
    display: block;
    margin: 0 auto;
    padding: 0 0 50px 0;
}

.load .box .md-spinner {
    width: 150px !important;
    height: 150px !important;
}

@media (max-width: 600px) {
    .load .box img {
        padding: 0 0 25px 0;
    }

    .load .box .md-spinner {
        width: 75px !important;
        height: 75px !important;
    }
}
</style>
