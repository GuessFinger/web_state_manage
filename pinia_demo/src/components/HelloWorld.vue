<script setup>
import {storeToRefs} from 'pinia';
import {useDemoStore} from "../store/StoreDefine";

const demoStore = useDemoStore();

// 获取state里面的值
console.log(demoStore.message);
// 假如说里面有多个值，你想要用解构的方式获取,需要注意的是下面的方式获取的值，不是响应式的
// 这个和vue3.0里面的效果是一样的
const {message, count} = demoStore;
// 要像下面这样的方式才可以哈
const {message: reactiveMessage, count: reactiveCount} = storeToRefs(demoStore);

// 修改是最频繁的操作，放到最后
// 获取计算属性
console.log(demoStore.reverseMessage);
// 调用里面的方法
demoStore.changeMessage('i am change the world');

// 修改里面的值
// 方式1
demoStore.message = 'world!!!';
// 方式2，如果想要修改多个值的话，比直接修改有优化
demoStore.$patch({
  message: 'world!!!',
  count: 10
});
// 方式3 也是修改多个值，但是某一个值依赖之前的值
demoStore.$patch(state => {
  state.message = 'world!!!';
  state.count += 3;
})
// 方式4 利用方法进行值的修改，也就是调用上面changeMessage的方法
// 我印象中vue一直在强调一个东西，单向数据流，数据改变可控，我个人更倾向于使用方法修改数据
</script>

<template>
  <div>hello world</div>
</template>

<style scoped>

</style>
