<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-thanks">
                <info-box :title="title" :message="message" />
                <round-button iconClass="replay" @click="repeat" />
            </div>
        </md-layout>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderBar from '@/components/HeaderBar'
import InfoBox from '@/components/InfoBox'
import RoundButton from '@/components/RoundButton'

export default {
    name: 'Thanks',
    components: {
        HeaderBar,
        InfoBox,
        RoundButton
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
    margin: 152px 0 80px 0;
}

.box-thanks .roundButton {
    padding: 65px 0 0 0;
}
</style>
