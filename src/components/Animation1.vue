<template>
    <button @click="toggle">click</button>
    <transition name="fade">
        <h1 v-if="showTitle">你好 vue3</h1>
    </transition>
</template>

<script setup>
import { ref } from 'vue'
let showTitle = ref(true)
function toggle(){
    showTitle.value = !showTitle.value
}
</script>

<style>
/* 标签进入和离开的时候 */
.fade-enter-active, .fade-leave-active{
    transition: opacity 0.5s linear;
}
/* 进入的开始和结束 */
.fade-enter-from, .fade-leave-to{
    opacity: 0;
}
</style>