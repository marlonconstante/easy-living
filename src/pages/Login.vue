<template>
    <md-layout class="full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text type="email" v-model="user.email" placeholder="E-MAIL" validation="required|email" />
            <input-text type="password" v-model="user.password" placeholder="PASSWORD" validation="required|min:6" />
            <round-button iconClass="arrow_forward" @click="next" />
            <link-button v-if="!isNewAccount()" @click="createAccount">YOU DO NOT HAVE AN ACCOUNT?</link-button>
            <link-button v-if="!isNewAccount()" @click="forgotPassword">FORGOT PASSWORD?</link-button>
        </div>
    </md-layout>
</template>

<script>
import Slogan from '@/components/Slogan'
import InputText from '@/components/InputText'
import RoundButton from '@/components/RoundButton'
import LinkButton from '@/components/LinkButton'

export default {
    name: 'Login',
    inject: ['$validator'],
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    components: {
        Slogan,
        InputText,
        RoundButton,
        LinkButton
    },
    methods: {
        async next() {
            try {
                if (await this.$utils.validateAll(this.$el, this.$validator)) {
                    if (this.isNewAccount()) {
                    } else {
                    }
                }
            } catch (error) {
                this.$toasted.showError(error)
            }
        },
        isNewAccount() {
            return false
        },
        createAccount() {
            this.$router.push('user')
        },
        forgotPassword() {
        }
    }
}
</script>

<style>

</style>
