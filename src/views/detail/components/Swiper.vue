<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false">
    <van-swipe-item v-for="item in topimg"
      ><van-image :src="item">
        <template v-slot:loading>
          <van-loading type="spinner" size="50" />
        </template> </van-image
    ></van-swipe-item>
  </van-swipe>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
const props = defineProps({
  topimg: {
    type: Array as PropType<string[] | undefined>,
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

  height: 300px;
}

img {
  width: 100%;
}
</style>
