<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-instruction">
                <div class="title">Would you like to give us some more instruction?</div>
                <div class="subtitle">(leave it blank, if not)</div>
                <input-text-area v-model="instruction" :isTransparent="true" :isBig="true" placeholder="INSTRUCTION" />

                <md-layout>
                    <md-layout md-align="end">
                        <round-button :isInverted="true" iconClass="arrow_back" @click="back"/>
                    </md-layout>

                    <md-layout>
                        <round-button @click="next">GO</round-button>
                    </md-layout>
                </md-layout>
            </div>
        </md-layout>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import HeaderBar from '@/components/HeaderBar'
import InputTextArea from '@/components/InputTextArea'
import RoundButton from '@/components/RoundButton'

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
    methods: {
        ...mapActions('delivery', ['setInstruction']),
        back() {
            this.$router.go(-1)
        },
        next() {
            this.setInstruction(this.instruction)
        }
    }
}
</script>

<style scoped>
.box-instruction {
    margin: 152px 0 80px 0;
    width: 450px;
}

.box-instruction .inputTextArea {
    margin: 0 5px 65px 5px;
}

.box-instruction .subtitle {
    margin-bottom: 46px;
}
</style>
