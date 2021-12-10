<template>
    <h1>这是首页</h1>
    <TodoList />
    <Rate2 v-model="score" theme="green" ></Rate2>
    <Rate1 :value="score" @update="update" theme="green"></Rate1>
    <Rate :value="score"></Rate>
</template>

<script setup>
import { computed, ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import Rate2 from '../components/Rate2.vue'
import Rate1 from '../components/Rate1.vue'
import Rate from '../components/Rate.vue'
let score = ref(3.5)
function update(num){
    score.value = num
}
</script>