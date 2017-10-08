<template>
    <div class="content">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <form v-on:submit.prevent="signIn">
                <input type="email" v-model="user.email" placeholder="E-MAIL">
                <input type="password" v-model="user.password" placeholder="PASSWORD">
                <md-button class="md-fab">
                    <md-icon class="md-size-2x">arrow_forward</md-icon>
                </md-button>
                <div class="link">
                    <md-ink-ripple /> YOU DO NOT HAVE AN ACCOUNT?
                </div>
                <div class="link">
                    <md-ink-ripple /> FORGOT PASSWORD?
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { auth } from '../services/firebase'
import Slogan from '@/components/Slogan'

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
        Slogan
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
    margin: auto;
    width: 400px;
}

input {
    display: block;
    width: 100%;
    height: 64px;
    margin: 20px 0;
    border: none;
    border-radius: 6px;
    font-family: 'Archivo';
    font-size: 16px;
    text-indent: 20px;
    color: #fc4349;
}

input:focus {
    outline: none;
    box-shadow: 0 0 30px #8a4447;
}

input::-webkit-input-placeholder {
    color: #fc4349;
}

input:-moz-placeholder {
    color: #fc4349;
}

input::-moz-placeholder {
    color: #fc4349;
}

input:-ms-input-placeholder {
    color: #fc4349;
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
