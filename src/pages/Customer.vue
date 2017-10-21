<template>
    <md-layout class="full-height" md-vertical-align="center" md-align="center">
        <div class="box">
            <img src="../assets/logo.svg">
            <slogan />
            <input-text v-model="customer.name" placeholder="NAME" validation="required|alpha_spaces" />
            <input-text v-model="customer.birthDate" mask="##/##/####" maskPlaceholder="MM/DD/YYYY" placeholder="DATE OF BIRTH" validation="required|date_format:MM/DD/YYYY" />
            <input-text-area v-model="customer.address" placeholder="ADDRESS" validation="required" />
            <input-text v-model="customer.community" placeholder="COMMUNITY NAME" validation="required" />
            <round-button iconClass="arrow_forward" @click="next" />
            <link-button @click="login">I ALREADY HAVE AN ACCOUNT</link-button>
        </div>
    </md-layout>
</template>

<script>
import Slogan from '@/components/Slogan'
import InputText from '@/components/InputText'
import InputTextArea from '@/components/InputTextArea'
import RoundButton from '@/components/RoundButton'
import LinkButton from '@/components/LinkButton'

export default {
    name: 'Customer',
    inject: ['$validator'],
    data() {
        return {
            customer: {
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
        async next() {
            try {
                if (await this.$utils.validateAll(this.$el, this.$validator)) {
                    this.$router.push({
                        name: 'login',
                        query: this.customer
                    })
                }
            } catch (error) {
                this.$toasted.showError(error)
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
