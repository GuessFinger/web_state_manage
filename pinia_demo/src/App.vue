<script setup>
import HelloWorld from './components/HelloWorld.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCard from './components/ShoppingCard.vue';

</script>

<template>
  <h1>pinia - 购物车示例</h1>
  <hr>
  <h2>商品列表</h2>
  <ProductList />
  <hr>
  <ShoppingCard />
  <br>
  <HelloWorld />

</template>

<style scoped>

</style>
