<template>
  <div id="shop-item">
    <div class="item-selector" @click="cli">
      <img src="../../../assets/img/cart/tick.svg" alt="" :class="{ click: itemInfo.check }" />
    </div>
    <div class="item-img">
      <img :src="itemInfo.img" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述: {{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  itemInfo: {
    type: Object as PropType<detail.cartype>,
    default: () => {}
  }
});
const cli = () => {
  props.itemInfo.check = !props.itemInfo.check;
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  display: flex;
  align-items: center;
  width: 14%;
}
.item-selector img {
  border-radius: 100%;
  border: 1px solid rgb(197, 197, 197);
}
.click {
  background-color: pink;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>
