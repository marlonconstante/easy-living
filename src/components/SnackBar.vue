<template>
    <md-snackbar ref="snackbar" :md-duration="duration">
        <span>{{ message }}</span>
        <md-button @click="close">OK</md-button>
    </md-snackbar>
</template>

<script>
export default {
    name: 'SnackBar',
    props: {
        duration: {
            type: Number,
            default: 4000
        },
        message: {
            type: String
        }
    },
    methods: {
        open() {
            this.$refs.snackbar.open()
        },
        close() {
            this.$refs.snackbar.close()
        }
    }
}
</script>

<style>
.md-snackbar .md-snackbar-container {
    width: 400px;
    padding: 16px 24px;
    border-radius: 6px 6px 0 0;
    background-color: #2c3e50;
}

.md-snackbar .md-snackbar-container .md-snackbar-content span,
.md-snackbar .md-snackbar-container .md-snackbar-content .md-button {
    font-family: 'Archivo';
    font-size: 16px;
    color: #ffffff;
}

.md-snackbar .md-snackbar-container .md-snackbar-content .md-button {
    font-weight: 700;
}

.md-snackbar .md-snackbar-container .md-snackbar-content .md-button:last-child {
    margin-left: 24px;
}
</style>
