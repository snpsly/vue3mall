<template>
  <van-config-provider :theme-vars="themeVars"
    ><van-nav-bar :fixed="true"
      ><template #title>
        <span v-for="item in title" :key="item">{{ item }}</span></template
      >
    </van-nav-bar></van-config-provider
  >
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: Array<string>,
    default: () => []
  }
});
const themeVars = {
  NavBarTitleTextColor: '#fff'
};
</script>
<style lang="scss" scoped>
.van-nav-bar {
  background-color: #ff8198;
}
.van-hairline--bottom:after {
  border-bottom-width: 0px;
}
</style>
