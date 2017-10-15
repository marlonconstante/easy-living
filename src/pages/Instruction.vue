<template>
    <div class="full-height">
        <header-bar />

        <md-layout class="full-height" md-vertical-align="center" md-align="center">
            <div class="box-instruction">
                <div class="title">Would you like to give us some more instruction?</div>
                <div class="subtitle">(leave it blank, if not)</div>
                <input-text-area :isTransparent="true" :isBig="true" placeholder="INSTRUCTION" />

                <md-layout>
                    <md-layout md-align="end">
                        <round-button :isInverted="true" iconClass="arrow_back" />
                    </md-layout>

                    <md-layout>
                        <round-button>GO</round-button>
                    </md-layout>
                </md-layout>
            </div>
        </md-layout>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import InputTextArea from '@/components/InputTextArea'
import RoundButton from '@/components/RoundButton'

export default {
    name: 'Instruction',
    components: {
        HeaderBar,
        InputTextArea,
        RoundButton
    }
}
</script>

<style scoped>
.box-instruction {
    margin: 180px 0 80px 0;
    width: 450px;
}

.box-instruction .inputTextArea {
    margin: 10px 5px 65px 5px;
}
</style>
