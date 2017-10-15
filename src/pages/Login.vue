<template>
    <md-layout class="full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text type="email" v-model="user.email" placeholder="E-MAIL" />
            <input-text type="password" v-model="user.password" placeholder="PASSWORD" />
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
        clear() {
            this.user.email = ''
            this.user.password = ''
        },
        next() {
            if (this.isNewAccount()) {
                this.register()
            } else {
                this.signIn()
            }
        },
        async register() {
            try {
                const { uid } = await Firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                this.$firebaseRefs.customers.child(uid).set(this.customer)

                this.clear()
            } catch (error) {
                this.$toasted.showError(error)
            }
        },
        async signIn() {
            try {
                await Firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)

                this.clear()
            } catch (error) {
                this.$toasted.showError(error)
            }
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
