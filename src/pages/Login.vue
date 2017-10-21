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
import Firebase from 'firebase'
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
    props: {
        customer: {
            type: Object
        }
    },
    components: {
        Slogan,
        InputText,
        RoundButton,
        LinkButton
    },
    firebase: {
        customers: Firebase.database().ref('customers')
    },
    methods: {
        async next() {
            try {
                if (await this.$utils.validateAll(this.$el, this.$validator)) {
                    if (this.isNewAccount()) {
                        await this.register()
                    } else {
                        await this.signIn()
                    }
                }
            } catch (error) {
                this.$toasted.showError(error)
            }
        },
        async register() {
            const { uid } = await Firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
            this.$firebaseRefs.customers.child(uid).set(this.customer)
        },
        signIn() {
            return Firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        },
        isNewAccount() {
            return Object.keys(this.customer).length !== 0
        },
        createAccount() {
            this.$router.push('customer')
        },
        forgotPassword() {
        }
    }
}
</script>

<style>

</style>
