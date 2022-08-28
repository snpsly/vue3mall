<template>
  <div class="bar">
    <!-- 左边全选的部分 -->
    <div class="choose">
      <img src="../../../assets/img/cart/tick.svg" alt="" :class="{ click: flag }" @click="cli" />
      <span class="choose-all">全选</span>
    </div>
    <!-- 中间价格部分 -->
    <div class="price">
      合计: <span class="allPrice">{{ sum }}</span
      >元
    </div>
    <!-- 右边去计算部分 -->
    <div class="calculate">提交订单</div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index';
import { findDir } from '@vue/compiler-core';
import ShopCartVue from '@/views/detail/components/ShopCart.vue';
import { computed, ref } from 'vue';
const mainStore = useMainStore();
let sum = computed(() => {
  let count = 0;
  if (mainStore.shopcart !== undefined) {
    mainStore.shopcart
      .filter((el) => {
        return el.check === true;
      })
      .forEach((el) => {
        if (el.count !== undefined) {
          count += el.count * parseInt(el.price);
        }
      });
  }
  return count.toFixed(2);
});
let flag = computed(() => {
  const ff = mainStore.shopcart.find((el) => el.check === false);
  if (ff) {
    return false;
  } else {
    return true;
  }
});
console.log(mainStore);

const cli = () => {
  let all = !flag.value;

  mainStore.shopcart.forEach((el) => (el.check = all));
};
</script>

<style scoped>
.bar {
  height: 49px;
  position: relative;
  display: flex;
  z-index: 115;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  line-height: 40px;
  padding-left: 10px;
}
.bar-btn {
  display: inline-block;
  position: absolute;
  top: 10px;
  color: #fff;
  line-height: 20px;
}
.choose-all {
  position: absolute;
  left: 30px;
}
.choose {
  width: 80px;
}
.choose img {
  border-radius: 100%;
  border: 1px solid rgb(197, 197, 197);
}
.price {
  flex: 1;
}
.allPrice {
  color: var(--color-tint);
  margin: 0 3px;
}
.calculate {
  width: 100px;
  text-align: center;
  background-image: linear-gradient(90deg, #ff6034, #ee0a24);
  color: #fff;
}
.click {
  background-color: pink;
}
</style>
