<template>
    <div id="app">
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>
