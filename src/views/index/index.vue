<template>
  <div class="home">
    <nav-bar :title="title"></nav-bar>
    <scroll @add="add" ref="scrolly">
      <swiper :bannerList="bannerList"></swiper>
      <recommend :recommendList="recommendList"></recommend>
      <d-keyword></d-keyword>
      <tab-control :titles="['流行', '新款', '精选']" @index="index"></tab-control>
      <shop-list ref="list" @comlist="comlist"></shop-list
    ></scroll>
  </div>
  <back-top v-show="flag" @click="gotop"></back-top>
</template>
<script lang="ts" setup>
import { getHomeMultiData } from '@/api/index/index';
import NavBar from '@/components/navbar/NavBar.vue';
import {
  reactive,
  onMounted,
  ref,
  watch,
  onBeforeUnmount,
  onUnmounted,
  getCurrentInstance
} from 'vue';
import Swiper from './components/Swiper.vue';

import Recommend from './components/Recommend.vue';
import dKeyword from './components/dKeyword.vue';
import DKeyword from './components/dKeyword.vue';
import ShopList from '@/components/list/ShopList.vue';
import TabControl from './components/TabControl.vue';
import Scroll from '@/components/scroll/Scroll.vue';
import BackTop from '@/components/backtop/BackTop.vue';
import { gotop } from '@/hooks/index/index';
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/store/index';
const mainStore = useMainStore();
const title = reactive(['商城']);
const bannerList = ref<Index.swiper[]>([]);
const recommendList = ref<Index.recommend[]>([]);
const list = ref<any>(null);
const scrolly = ref(null);
let flag = ref<boolean>(false);
let oldScrollTop: number = 0; // 记录上一次滚动结束后的滚动距离
const scrollTop = ref<number>(0); // 记录当前的滚动距离

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {}); // 离开当前组件别忘记移除事件监听
});

watch(
  () => scrollTop.value,
  (newValue, oldValue) => {
    oldScrollTop = newValue;

    newValue > 2200 ? (flag.value = true) : (flag.value = false);
  }
);

const getBannerList = async () => {
  const { data } = await getHomeMultiData();
  bannerList.value = data.banner.list;
  recommendList.value = data.recommend.list;
};

const comlist = () => {};
onMounted(() => {
  getBannerList();

  window.addEventListener('scroll', () => {
    scrollTop.value = window.scrollY;
  });
});
const add = () => {
  list.value.getList(list.value.listtype);
};

const index = (index: number) => {
  switch (index) {
    case 0:
      list.value.listtype = 'pop';
      break;
    case 1:
      list.value.listtype = 'new';
      break;
    case 2:
      list.value.listtype = 'sell';
      break;
  }
};
onUnmounted(() => {
  storeToRefs(mainStore).pagey.value = oldScrollTop;
});
</script>

<style lang="scss" scoped></style>
