<template>
  <van-nav-bar title="购物车" :fixed="true" />
  <cart-list class="cart-list"></cart-list>
  <apply class="bottom-nav"></apply>
</template>
<script lang="ts" setup>
import CartList from './components/CartList.vue';
import bottomNav from './components/bottomnav.vue';
import Apply from './components/Apply.vue';
</script>

<style lang="scss" scoped>
.van-nav-bar {
  --van-nav-bar-background-color: #ff8198;
  --van-nav-bar-title-text-color: white;
}
.bottom-nav {
  position: fixed;
  bottom: 44px;
  width: 100%;
}
.cart-list {
  margin-top: 44px;
  margin-bottom: 97px;
}
</style>
