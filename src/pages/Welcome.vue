<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <info-box :title="title" :message="message" />
        </md-layout>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
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
        HeaderBar,
        InfoBox
    }
}
</script>

<style>

</style>
