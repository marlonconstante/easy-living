<template>
    <div class="full-height">
        <md-layout class="header">
            <md-layout md-vertical-align="start">
                <img src="../assets/logo.svg">
            </md-layout>

            <md-layout md-align="end">
                <user-box name="Rony Hanksfield" community="Community Name" address="1855 Broadway (at 61st Street) New York, NY 10023" />
            </md-layout>
        </md-layout>

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <info-box :title="title" :message="message" />
        </md-layout>
    </div>
</template>

<script>
import UserBox from '@/components/UserBox'
import InfoBox from '@/components/InfoBox'

export default {
    name: 'Welcome',
    data() {
        return {
            title: 'Welcome, <b>Rony</b>!',
            message: 'We are here to help you.'
        }
    },
    components: {
        UserBox,
        InfoBox
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    width: 100%;
}

.header img {
    margin: 40px;
}
</style>
