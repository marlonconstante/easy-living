<template>
    <div class="content">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text type="email" v-model="user.email" placeholder="E-MAIL" />
            <input-text type="password" v-model="user.password" placeholder="PASSWORD" />
            <round-button iconClass="arrow_forward" @click="signIn" />
            <link-button @click="createAccount">YOU DO NOT HAVE AN ACCOUNT?</link-button>
            <link-button @click="forgotPassword">FORGOT PASSWORD?</link-button>
        </div>
    </div>
</template>

<script>
import { auth } from '../services/firebase'
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
    components: {
        Slogan,
        InputText,
        RoundButton,
        LinkButton
    },
    methods: {
        async register() {
            try {
                const { uid, email } = await auth.createUserWithEmailAndPassword(this.user.email, this.user.password)

                console.log(`[register] UID: ${uid}\nE-MAIL: ${email}`)

                this.user.email = ''
                this.user.password = ''
            } catch (error) {
                console.log(error.message)
            }
        },
        async signIn() {
            try {
                const { uid, email } = await auth.signInWithEmailAndPassword(this.user.email, this.user.password)

                console.log(`[signIn] UID: ${uid}\nE-MAIL: ${email}`)

                this.user.email = ''
                this.user.password = ''
            } catch (error) {
                console.log(error.message)
            }
        },
        createAccount() {
            this.$router.push('/customer')
        },
        forgotPassword() {
        }
    }
}
</script>

<style scoped>
.content {
    display: table-cell;
    vertical-align: middle;
}

.box {
    margin: 60px auto;
    width: 400px;
}
</style>
