<template>
    <div class="content">
        <div class="box">
            <img src="../assets/logo.svg">
            <label class="slogan">Everything you need. We deliver.</label>
            <form v-on:submit.prevent="signIn">
                <input type="email" v-model="user.email" placeholder="E-MAIL">
                <input type="password" v-model="user.password" placeholder="PASSWORD">
                <md-button class="md-fab">
                    <md-icon class="md-size-2x">arrow_forward</md-icon>
                </md-button>
                <a>YOU DO NOT HAVE AN ACCOUNT?</a>
                <a>FORGOT PASSWORD?</a>
            </form>
        </div>
    </div>
</template>

<script>
import { auth } from '../services/firebase'

export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
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

label.slogan {
    display: block;
    font-size: 22.6px;
    margin: 21.5px 0 60px 0;
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

.md-button {
    margin: 30px;
    width: 91px;
    height: 91px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 0 rgba(0, 0, 0, 0.1) !important;
    background-color: #2c3e50 !important;
}

.md-icon {
    color: #cb434d;
}

a {
    display: block;
    cursor: pointer;
    margin: 30px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none !important;
    color: #ffffff !important;
}
</style>
