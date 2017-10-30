<template>
    <div class="mobile-content full-height">
        <header-bar />

        <div class="header-box">
            <img class="logo" src="../assets/logo.svg">
            <slogan />
        </div>

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-thanks">
                <info-box :title="title" :message="message" />
                <round-button iconClass="replay" @click="repeat" />
            </div>

            <div class="footer-box">
                <user-box />
            </div>
        </md-layout>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderBar from '@/components/HeaderBar'
import Slogan from '@/components/Slogan'
import InfoBox from '@/components/InfoBox'
import RoundButton from '@/components/RoundButton'
import UserBox from '@/components/UserBox'

export default {
    name: 'Thanks',
    components: {
        HeaderBar,
        Slogan,
        InfoBox,
        RoundButton,
        UserBox
    },
    computed: {
        ...mapState('auth', ['currentUser']),
        firstUserName() {
            return this.currentUser.name.split(' ')[0].toLowerCase()
        },
        title() {
            return `Thank’s, <span class="userName">${this.firstUserName}</span>!`
        },
        message() {
            return 'Soon we will be taking the order to you.'
        }
    },
    methods: {
        repeat() {
            this.$router.push('stop')
        }
    }
}
</script>

<style scoped>
.box-thanks {
    margin: 175px 0 80px 0;
}

.box-thanks .roundButton {
    padding: 65px 0 0 0;
}

@media (max-width: 600px) {
    .box-thanks {
        margin: 0;
    }

    .box-thanks .roundButton {
        padding: 0;
    }
}
</style>
