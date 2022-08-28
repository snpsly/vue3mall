<template>
  <div class="detail">
    <navbar class="detailnav"></navbar>
    <scroll
      ><swiper :topimg="topimg"></swiper>
      <namedetail :goods="goods"></namedetail>
      <shop :shop="shop"></shop>
      <img-list :imglist="imglist"></img-list>
      <rule :rule="rule" :set="set"></rule>
      <rate :rate="rate"></rate>
      <shop-list :goods="recommend"></shop-list
    ></scroll>
  </div>
  <back-top v-show="flag" @click="gotop"></back-top>
  <shop-cart class="cart" @addcart="addcart"></shop-cart>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import navbar from './components/navbar.vue';
import Swiper from './components/Swiper.vue';
import { getDetailData, getRecommend } from '@/api/detail/index';
import { onMounted, ref, onBeforeUnmount, watch } from 'vue';
import Shop from './components/shop.vue';
import imgList from './components/imglist.vue';
import namedetail from './components/namedetail.vue';
import Rule from './components/Rule.vue';
import Rate from './components/Rate.vue';
import ShopList from '@/components/list/ShopList.vue';
import Scroll from '@/components/scroll/scroll.vue';
import BackTop from '@/components/backtop/BackTop.vue';
import { gotop } from '@/hooks/index/index';
import ShopCart from './components/ShopCart.vue';

import { useMainStore } from '@/store/index';
import Toast from '@/components/index';
const mainStore = useMainStore();
const router = useRoute();
const topimg = ref<string[]>([]);
const goods = ref({});
const shop = ref({});
const imglist = ref([]);
const rule = ref([]);
const set = ref([]);
const rate = ref({});
const recommend = ref([]);
const product = ref<detail.cartype>({
  title: '',
  img: '',
  desc: '',
  price: '',
  iid: ''
});
const navclick = () => {};
const getData = async () => {
  const { result } = await getDetailData({ iid: router.params.iid });
  topimg.value = result.itemInfo.topImages;
  product.value = {
    title: result.itemInfo.title,
    img: result.detailInfo.detailImage[0].list[0],
    desc: result.itemInfo.desc,
    price: result.itemInfo.lowNowPrice,
    iid: router.params.iid
  };
  goods.value = {
    title: result.itemInfo.title,
    realPrice: result.itemInfo.lowNowPrice,
    oldPrice: result.itemInfo.oldPrice,
    discount: result.itemInfo.discount,
    itemInfo: result.itemInfo,
    columns: result.columns,
    services: result.shopInfo.services
  };
  shop.value = result.shopInfo;
  imglist.value = result.detailInfo.detailImage[0].list;
  rule.value = result.itemParams.rule.tables;
  set.value = result.itemParams.info.set;
  if (result.rate.cRate !== 0) {
    rate.value = result.rate.list[0];
  }
};
const getListData = async () => {
  const { data } = await getRecommend();
  recommend.value = data.list;
};
let flag = ref<boolean>(false);
let oldScrollTop: number = 0; // 记录上一次滚动结束后的滚动距离
const scrollTop = ref<number>(0); // 记录当前的滚动距离
const scrollFixedStatus = ref<boolean>(true);
function handleScroll() {
  window.addEventListener('scroll', () => {
    scrollTop.value = window.scrollY;
  });
}
onMounted(() => {
  handleScroll();
});
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
onMounted(() => {
  getData();
  getListData();
});
const addcart = () => {
  mainStore.addCart(product.value).then((res) => {
    Toast({ title: res });
  });
};
</script>
<style lang="scss" scoped>
.detail {
  position: relative;

  height: 100vh;
}

.detailnav {
  position: fixed;
  top: 0;
  z-index: 6;
}
.cart {
  position: fixed;
  z-index: 55;
}
</style>
