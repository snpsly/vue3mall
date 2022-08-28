<template>
  <div class="navbar">
    <div class="left">
      <div @click="back">
        <van-icon name="arrow-left" />
      </div>
    </div>

    <div class="center">
      <div class="center">
        <div
          v-for="(item, index) in navdata"
          @click="navclick(index)"
          :class="{ navbarclick: navindex === index }"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navdata = ref(['商品', '参数', '评论', '推荐']);
const navindex = ref(0);
const back = () => {
  router.back();
};
const navclick = (index: number) => {
  console.log(index);
};
</script>
<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  color: #000;
  display: flex;
  line-height: 44px;
  text-align: center;
  width: 100%;
}
.navbarclick {
  color: var(--color-tint);
}
.center {
  display: flex;
}
.center > div {
  flex: 1;
}
.navbar .left,
.navbar .right {
  width: 60px;
}
.navbar .center {
  flex: 1;
}
</style>
