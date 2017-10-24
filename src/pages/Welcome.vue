<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <info-box :title="title" :message="message" />
        </md-layout>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import HeaderBar from '@/components/HeaderBar'
import InfoBox from '@/components/InfoBox'

export default {
    name: 'Welcome',
    components: {
        HeaderBar,
        InfoBox
    },
    created() {
        setTimeout(() => {
            if (this.isLoggedUser) {
                this.$router.push('stop')
            } else {
                this.$router.push('login')
            }
        }, 2000)
    },
    computed: {
        ...mapGetters('auth', ['isLoggedUser']),
        ...mapState('auth', ['newUser', 'currentUser']),
        greeting() {
            return this.isLoggedUser ? 'Hello' : 'Welcome'
        },
        firstUserName() {
            return (this.currentUser || this.newUser).name.split(' ')[0].toLowerCase()
        },
        title() {
            return `${this.greeting}, <span class="userName">${this.firstUserName}</span>!`
        },
        message() {
            return this.isLoggedUser ? 'It\'s good to see you again.' : 'We are here to help you.'
        }
    }
}
</script>

<style>

</style>
