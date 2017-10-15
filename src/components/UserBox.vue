<template>
    <div class="userBox">
        <div class="info">
            <span class="name">{{ name }}</span>
            <md-icon>account_circle</md-icon>
        </div>
        <div class="community">{{ community }}</div>
        <div class="address">{{ address }}</div>
    </div>
</template>

<script>
export default {
    name: 'UserBox',
    props: {
        name: {
            type: String
        },
        community: {
            type: String
        },
        address: {
            type: String
        }
    }
}
</script>

<style scoped>
.userBox {
    width: 243px;
    margin: 40px;
    font-size: 16px;
    text-align: right;
    color: #ffffff;
}

.userBox .info {
    display: inline-flex;
}

.userBox .info .name {
    font-weight: 700;
    text-transform: uppercase;
    margin: 3px 10px 0 0;
}

.userBox .community {
    opacity: 0.8;
    font-weight: 500;
    font-style: italic;
    margin: 13px 0 10px 0;
}

.userBox .address {
    opacity: 0.8;
}
</style>
