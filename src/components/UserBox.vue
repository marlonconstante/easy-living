<template>
    <div tabindex="0" class="userBox" @keyup.enter="onClick" @keyup.space="onClick" @click="onClick">
        <div class="info">
            <span class="name">{{ user.name }}</span>
            <md-menu ref="menu" md-align-trigger md-direction="bottom left" md-size="4">
                <md-icon md-menu-trigger>account_circle</md-icon>
                <md-menu-content>
                    <md-menu-item>
                        <span>Sign out</span>
                        <md-icon>exit_to_app</md-icon>
                    </md-menu-item>
                </md-menu-content>
            </md-menu>
        </div>
        <div class="community">{{ user.community }}</div>
        <div class="address">{{ user.address }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'UserBox',
    computed: {
        ...mapState('auth', ['newUser', 'currentUser']),
        user() {
            return (this.currentUser || this.newUser)
        }
    },
    methods: {
        onClick(event) {
            this.$refs.menu.open()
        }
    }
}
</script>

<style scoped>
.userBox {
    cursor: pointer;
    outline: none;
    border-radius: 6px;
    width: 340px;
    margin: 20px;
    padding: 20px;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0.7px;
    text-align: right;
    color: #ffffff;
}

.userBox:hover,
.userBox:focus {
    background-color: rgba(255, 255, 255, 0.05);
}

.userBox .info {
    display: inline-flex;
}

.userBox .info .name {
    width: 266px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    margin: 3px 10px 0 0;
}

.userBox .community {
    opacity: 0.8;
    font-weight: 500;
    font-style: italic;
    margin: 10px 0;
}

.userBox .address {
    opacity: 0.8;
}
</style>
