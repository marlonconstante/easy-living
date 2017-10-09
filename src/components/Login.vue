<template>
    <div class="content">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text type="email" v-model="user.email" placeholder="E-MAIL" />
            <input-text type="password" v-model="user.password" placeholder="PASSWORD" />
            <md-button class="md-fab" @click="signIn">
                <md-icon class="md-size-2x">arrow_forward</md-icon>
            </md-button>
            <div class="link">
                <md-ink-ripple /> YOU DO NOT HAVE AN ACCOUNT?
            </div>
            <div class="link">
                <md-ink-ripple /> FORGOT PASSWORD?
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from '../services/firebase'
import Slogan from '@/components/Slogan'
import InputText from '@/components/InputText'

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
        InputText
    },
    methods: {
        register: function() {
            const user = this.user
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(function(data) {
                    console.log(auth.currentUser)
                    user.email = ''
                    user.password = ''
                }).catch(function(error) {
                    console.log(error.message)
                })
        },
        signIn: function() {
            const user = this.user
            auth.signInWithEmailAndPassword(user.email, user.password)
                .then(function(data) {
                    console.log(auth.currentUser)
                    user.email = ''
                    user.password = ''
                }).catch(function(error) {
                    console.log(error.message)
                })
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

.md-button.md-fab {
    margin: 30px;
    width: 91px;
    height: 91px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 0 rgba(0, 0, 0, 0.1);
    background-color: #2c3e50 !important;
}

.md-icon {
    color: #cb434d;
}

.link {
    cursor: pointer;
    position: relative;
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
}
</style>
