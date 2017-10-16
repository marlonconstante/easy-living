<template>
    <div id="app">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Firebase from 'firebase'

export default {
    name: 'App',
    beforeCreate() {
        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const customerRef = Firebase.database().ref(`customers/${user.uid}`)
                this.$bindAsObject('user', customerRef, null, () => {
                    this.user.id = user.uid
                    this.user.email = user.email

                    console.log(this.user)
                })
            }
        });
    }
}
</script>

<style>

</style>
