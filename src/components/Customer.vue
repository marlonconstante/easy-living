<template>
    <div class="content">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text v-model="user.name" placeholder="NAME" />
            <input-text mask="##/##/####" v-model="user.birthDate" placeholder="DATE OF BIRTH" />
            <input-text-area v-model="user.address" placeholder="ADDRESS" />
            <input-text v-model="user.community" placeholder="COMMUNITY NAME" />
            <round-button iconClass="arrow_forward" @click="save" />
            <link-button>I ALREADY HAVE AN ACCOUNT</link-button>
        </div>
    </div>
</template>

<script>
import Slogan from '@/components/Slogan'
import InputText from '@/components/InputText'
import InputTextArea from '@/components/InputTextArea'
import RoundButton from '@/components/RoundButton'
import LinkButton from '@/components/LinkButton'

export default {
    name: 'Customer',
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
    methods: {
        save: function() {
            const user = this.user
            console.log(user)
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
