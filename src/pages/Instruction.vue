<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-instruction">
                <div class="title">Would you like to give us some more instruction?</div>
                <div class="subtitle">(leave it blank, if not)</div>
                <input-text-area v-focus v-model="instruction" :isTransparent="true" :isBig="true" placeholder="INSTRUCTION" />

                <md-layout>
                    <md-layout md-align="end">
                        <round-button :isInverted="true" iconClass="arrow_back" @click="back" />
                    </md-layout>

                    <md-layout>
                        <round-button :isLoading="isSavingDelivery" @click="next">GO</round-button>
                    </md-layout>
                </md-layout>
            </div>
        </md-layout>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HeaderBar from '@/components/HeaderBar'
import InputTextArea from '@/components/InputTextArea'
import RoundButton from '@/components/RoundButton'

const SAVING_DELIVERY = 'SAVING_DELIVERY'

export default {
    name: 'Instruction',
    components: {
        HeaderBar,
        InputTextArea,
        RoundButton
    },
    data() {
        return {
            instruction: this.$store.state.delivery.instruction
        }
    },
    computed: {
        ...mapState('auth', ['currentUser']),
        isSavingDelivery() {
            return this.$isLoading(SAVING_DELIVERY)
        }
    },
    methods: {
        ...mapActions('delivery', ['setInstruction', 'saveDelivery']),
        back() {
            this.$router.go(-1)
        },
        async next() {
            try {
                this.$startLoading(SAVING_DELIVERY)
                this.setInstruction(this.instruction)
                await this.saveDelivery(this.currentUser)
                this.$router.push('thanks')
            } catch (error) {
                this.$toasted.showError(error)
            } finally {
                this.$endLoading(SAVING_DELIVERY)
            }
        }
    }
}
</script>

<style scoped>
.box-instruction {
    margin: 175px 0 80px 0;
    width: 100%;
    max-width: 450px;
}

.box-instruction .inputTextArea {
    margin: 0 5px 65px 5px;
}

.box-instruction .subtitle {
    margin-bottom: 46px;
}

@media (max-width: 600px) {
    .box-instruction {
        margin: 104px 0 26px 0;
    }

    .box-instruction .inputTextArea {
        margin: 0 16px;
    }

    .box-instruction .subtitle {
        margin-bottom: 28px;
    }
}
</style>
