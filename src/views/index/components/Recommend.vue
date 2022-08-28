<template>
  <van-grid :border="false" :column-num="4" icon-size="72px">
    <van-grid-item
      v-for="item in recommendList"
      :url="item.link"
      :text="item.title"
      :icon="item.image"
    >
    </van-grid-item>
  </van-grid>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
const props = defineProps({
  recommendList: {
    type: Array as PropType<Index.recommend[]>,
    default: () => []
  }
});
</script>
<style lang="scss" scoped></style>
