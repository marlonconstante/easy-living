<template>
    <md-layout class="full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text v-model="user.name" placeholder="NAME" validation="required|alpha_spaces" />
            <input-text v-model="user.birthDate" mask="##/##/####" maskPlaceholder="MM/DD/YYYY" placeholder="DATE OF BIRTH" validation="required|date_format:MM/DD/YYYY" />
            <input-text-area v-model="user.address" placeholder="ADDRESS" validation="required" />
            <input-text v-model="user.community" placeholder="COMMUNITY NAME" validation="required" />
            <round-button iconClass="arrow_forward" :isLoading="isLoading" @click="next" />
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

const SET_NEW_USER = 'SET_NEW_USER'

export default {
    name: 'User',
    inject: ['$validator'],
    data() {
        return {
            user: {
                name: '',
                birthDate: '',
                address: '',
                community: ''
            }
        }
    },
    components: {
        Slogan,
        InputText,
        InputTextArea,
        RoundButton,
        LinkButton
    },
    computed: {
        isLoading() {
            return this.$isLoading(SET_NEW_USER)
        }
    },
    methods: {
        ...mapActions(['setNewUser']),
        async next() {
            try {
                this.$startLoading(SET_NEW_USER)
                if (await this.$utils.validateAll(this.$el, this.$validator)) {
                    this.setNewUser(this.user)
                    this.login()
                }
            } catch (error) {
                this.$toasted.showError(error)
            } finally {
                this.$endLoading(SET_NEW_USER)
            }
        },
        login() {
            this.$router.push('login')
        }
    }
}
</script>

<style>

</style>
