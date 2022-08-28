<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false">
    <van-swipe-item v-for="item in bannerList">
      <a :href="item.link"> <img :src="item.image" alt="" /> </a
    ></van-swipe-item>
  </van-swipe>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
const props = defineProps({
  bannerList: {
    type: Array as PropType<Index.swiper[]>,
    default: () => []
  }
});
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

img {
  width: 100%;
}
</style>
