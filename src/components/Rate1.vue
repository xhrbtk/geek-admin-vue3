<template>
    <div :style="fontstyle">
        <div class="rate" @mouseout="mouseout">
            <span @mouseover="mouseover(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @click="onRate(num)" @mouseover="mouseover(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue'
let props = defineProps({
    value: Number,
    theme: { type: String, default: 'orange' }
})
let emits = defineEmits('[update]') // 定义emits
function onRate(num){
    emits('update', num)
}


const themeObj = 
{
    'black': '#00', 
    'white': '#fff', 
    'red': '#f5222d', 
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': 'green',
    'blue': '#40a9ff'
}
const fontstyle = computed(() => {
    console.log('lallla', themeObj[props.theme])
    return `color:${themeObj[props.theme]};`
}) 


let width = ref(props.value)
console.log('width', width.value)
function mouseover(i){
    console.log('i----', i)
    width.value = i
}
function mouseout(){
    width.value = props.value
}
const fontwidth = computed(() => `width:${width.value}em`)
</script>

<style scoped>
.rate{
    position: relative;
    display: inline-block;
}
.rate > span.hollow{
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>