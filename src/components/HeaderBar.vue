<template>
    <md-layout class="headerBar">
        <md-layout md-vertical-align="start">
            <img src="../assets/logo.svg">
        </md-layout>

        <md-layout md-align="end">
            <user-box :name="user.name" :community="user.community" :address="user.address" />
        </md-layout>
    </md-layout>
</template>

<script>
import { mapState } from 'vuex'
import UserBox from '@/components/UserBox'

export default {
    name: 'HeaderBar',
    components: {
        UserBox
    },
    computed: {
        ...mapState('auth', ['newUser', 'currentUser']),
        user() {
            return (this.currentUser || this.newUser)
        }
    }
}
</script>

<style scoped>
.headerBar {
    position: fixed;
    width: 100%;
}

.headerBar img {
    margin: 40px;
}
</style>
