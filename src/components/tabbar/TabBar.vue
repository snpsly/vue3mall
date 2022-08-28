<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart" replace to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/me">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const active = ref(0);
</script>
<style lang="scss" scoped></style>
