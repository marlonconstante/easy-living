<template>
    <md-layout class="full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text v-focus v-model="user.name" placeholder="NAME" validation="required|alpha_spaces" />
            <input-text v-model="user.birthDate" mask="##/##/####" maskPlaceholder="MM/DD/YYYY" placeholder="DATE OF BIRTH" validation="required|date_format:MM/DD/YYYY" />
            <input-text-area v-model="user.address" placeholder="ADDRESS" validation="required" />
            <input-text v-model="user.community" placeholder="COMMUNITY NAME" validation="required" />
            <round-button iconClass="arrow_forward" @click="next" />
            <link-button @click="login">I ALREADY HAVE AN ACCOUNT</link-button>
        </div>
    </md-layout>
</template>

<script>
import { mapActions } from 'vuex'
import Slogan from '@/components/Slogan'
import InputText from '@/components/InputText'
import InputTextArea from '@/components/InputTextArea'
import RoundButton from '@/components/RoundButton'
import LinkButton from '@/components/LinkButton'

export default {
    name: 'User',
    inject: ['$validator'],
    data() {
        return {
            user: { ...this.$store.state.auth.newUser }
        }
    },
    components: {
        Slogan,
        InputText,
        InputTextArea,
        RoundButton,
        LinkButton
    },
    methods: {
        ...mapActions('auth', ['clearNewUser', 'setNewUser']),
        async next() {
            try {
                if (await this.$utils.validateAll(this.$el, this.$validator)) {
                    this.setNewUser(this.user)
                    this.$router.push('welcome')
                }
            } catch (error) {
                this.$toasted.showError(error)
            }
        },
        login() {
            this.clearNewUser()
            this.$router.push('login')
        }
    }
}
</script>

<style>

</style>
