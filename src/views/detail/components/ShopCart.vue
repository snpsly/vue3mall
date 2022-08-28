<template>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" />
    <van-action-bar-icon icon="cart-o" text="购物车" />
    <van-action-bar-icon icon="shop-o" text="店铺" />
    <van-action-bar-button type="danger" text="加入购物车" @click="onClickButton" />
  </van-action-bar>
</template>
<script lang="ts" setup>
const emits = defineEmits(['addcart']);
const handleClick = () => {
  emits('addcart');
};
const onClickButton = () => {
  handleClick();
};
</script>
<style lang="scss" scoped></style>
