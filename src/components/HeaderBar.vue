<template>
    <md-layout class="headerBar">
        <md-layout md-vertical-align="start">
            <img class="logo" src="../assets/logo.svg">
        </md-layout>

        <md-layout md-align="end">
            <user-box />
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
    position: absolute;
    width: 100%;
    height: 175px;
}

.headerBar .logo {
    margin: 40px;
}

@media (max-width: 600px) {
    .headerBar {
        height: 94px;
    }

    .headerBar .logo {
        margin: 32px 16px;
    }
}

@media (min-width: 601px) and (max-width: 840px) {
    .headerBar .logo {
        width: 247px;
    }
}
</style>
