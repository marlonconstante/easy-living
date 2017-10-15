<template>
    <md-layout class="headerBar">
        <md-layout md-vertical-align="start">
            <img src="../assets/logo.svg">
        </md-layout>

        <md-layout md-align="end">
            <user-box name="Rony Hanksfield" community="Community Name" address="1855 Broadway (at 61st Street) New York, NY 10023" />
        </md-layout>
    </md-layout>
</template>

<script>
import UserBox from '@/components/UserBox'

export default {
    name: 'HeaderBar',
    components: {
        UserBox
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
