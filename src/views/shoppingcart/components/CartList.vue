<template>
  <van-list>
    <list-cart-item v-for="item in mainStore.shopcart" :itemInfo="item"></list-cart-item>
  </van-list>
</template>
<script lang="ts" setup>
import { useMainStore } from '@/store/index';
import ListCartItem from './ListCartItem.vue';
const mainStore = useMainStore();
</script>
<style lang="scss" scoped>
.list {
  float: left;
}
.main {
  height: calc(100vh - 44px - 47px - 50px);
  position: relative;
}
</style>
