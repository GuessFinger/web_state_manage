<script setup>
import {useShoppingCardStore} from "../store/shoppingCard";

const shoppingCardStore = useShoppingCardStore();

console.log(shoppingCardStore.totalPrice);
</script>
<template>
<div>
  <h2>您的购物车</h2>
  <p>
    <i>请添加一些商品到您的购物车里面</i>
  </p>
  <ul>
    <li v-for="product in shoppingCardStore.cartProducts" :key="product.id">
      {{product.title}} - {{product.price}} * {{product.count}}</li>
  </ul>
  <p>商品总价：xxx</p>
  <p>
    <button>结算</button>
  </p>
  <p>结算成功/失败</p>
</div>
</template>

<style scoped>

</style>
