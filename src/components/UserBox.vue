<template>
    <div tabindex="0" class="userBox" @keyup.enter="onClick" @keyup.space="onClick" @click="onClick">
        <div class="info">
            <span class="name">{{ user.name }}</span>
            <md-menu ref="menu" md-align-trigger md-direction="bottom left" md-size="4">
                <md-icon md-menu-trigger>account_circle</md-icon>
                <md-menu-content>
                    <md-menu-item @click="signOut">
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
import { mapState, mapActions } from 'vuex'

export default {
    name: 'UserBox',
    computed: {
        ...mapState('auth', ['newUser', 'currentUser']),
        user() {
            return (this.currentUser || this.newUser)
        }
    },
    methods: {
        ...mapActions('auth', ['logoutUser']),
        onClick(event) {
            this.$refs.menu.open()
        },
        async signOut() {
            await this.logoutUser()
            this.$router.push('login')
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

.userBox .info .name,
.userBox .community,
.userBox .address {
    overflow: hidden;
    text-overflow: ellipsis;
}

.userBox .info .name {
    width: 266px;
    font-weight: 700;
    white-space: nowrap;
    text-transform: uppercase;
    margin: 3px 10px 0 0;
}

.userBox .community {
    opacity: 0.8;
    font-weight: 500;
    font-style: italic;
    white-space: nowrap;
    margin: 10px 0;
}

.userBox .address {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    opacity: 0.8;
}

@media (max-width: 600px) {
    .headerBar .userBox {
        width: 150px;
        margin: 16px 8px;
        padding: 16px 8px;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.6px;
    }

    .headerBar .userBox .info .name {
        width: 100px;
        margin: 5px 10px 0 0;
    }

    .headerBar .userBox .community,
    .headerBar .userBox .address {
        display: none;
    }
}

@media (min-width: 601px) and (max-width: 840px) {
    .headerBar .userBox {
        width: 250px;
    }

    .headerBar .userBox .info .name {
        width: 176px;
    }
}
</style>
