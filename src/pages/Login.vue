<template>
    <md-layout class="full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text v-focus type="email" v-model="credentials.email" placeholder="E-MAIL" validation="required|email" />
            <input-text type="password" v-model="credentials.password" placeholder="PASSWORD" :disabled="isForgotPassword" validation="required|min:6" />
            <round-button iconClass="arrow_forward" :isLoading="isLoadingUser" @click="next" />
            <link-button v-if="!isNewAccount" @click="createAccount">YOU DO NOT HAVE AN ACCOUNT?</link-button>
            <link-button v-if="!isNewAccount" :isLoading="isSendingEmail" @click="forgotPassword">FORGOT PASSWORD?</link-button>
        </div>
    </md-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Slogan from '@/components/Slogan'
import InputText from '@/components/InputText'
import RoundButton from '@/components/RoundButton'
import LinkButton from '@/components/LinkButton'

const LOADING_USER = 'LOADING_USER'
const SENDING_EMAIL = 'SENDING_EMAIL'

export default {
    name: 'Login',
    inject: ['$validator'],
    data() {
        return {
            isForgotPassword: false,
            credentials: {
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
    computed: {
        ...mapGetters('auth', ['isNewAccount']),
        isLoadingUser() {
            return this.$isLoading(LOADING_USER)
        },
        isSendingEmail() {
            return this.$isLoading(SENDING_EMAIL)
        }
    },
    methods: {
        ...mapActions('auth', ['registerNewUser', 'loginUser']),
        async next() {
            try {
                this.$startLoading(LOADING_USER)
                if (await this.$utils.validateAll(this.$el, this.$validator)) {
                    if (this.isNewAccount) {
                        await this.registerNewUser(this.credentials)
                    } else {
                        await this.loginUser(this.credentials)
                    }
                    this.$router.push('welcome')
                }
            } catch (error) {
                this.$toasted.showError(error)
            } finally {
                this.$endLoading(LOADING_USER)
            }
        },
        createAccount() {
            this.$router.push('user')
        },
        async forgotPassword() {
            try {
                this.$startLoading(SENDING_EMAIL)
                this.isForgotPassword = true
                this.credentials.password = '';
                
                if (await this.$utils.validateAll(this.$el, this.$validator)) {
                }
            } catch (error) {
                this.$toasted.showError(error)
            } finally {
                this.isForgotPassword = false
                this.$endLoading(SENDING_EMAIL)
            }
        }
    }
}
</script>

<style>

</style>
