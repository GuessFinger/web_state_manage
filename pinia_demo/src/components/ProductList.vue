<script setup>
import {useProductStore} from "../store/product.js";
import {useShoppingCardStore} from "../store/shoppingCard";

import {onMounted} from "vue";

const productStore = useProductStore();
const shoppingCardStore = useShoppingCardStore();

onMounted(() => {
  productStore.queryProductList();
})

function addToShop(product) {
  // 先要把库存
  shoppingCardStore.addProductToCard(product);
}

</script>
<template>
  <ul>
    <li v-for="product in productStore.all" :key="product.id">
      {{product.title}} - {{ product.price}}
      <br>
      <button @click="addToShop(product)" :disabled="product.inventory === 0">添加到购物车</button>
    </li>
  </ul>
</template>

<style scoped>


</style>
