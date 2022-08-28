<template>
  <div class="goods-item" @click="click">
    <img :src="imgurl" alt="" />
    <div class="goods-info">
      <p>{{ items!.title }}</p>
      <span class="price"><van-icon name="points" />{{ items!.price }}</span>
      <span class="collect"><van-icon name="star-o" />{{ items!.cfav }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
  items: {
    type: Object as PropType<Index.goods>
  }
});
const imgurl = computed(() => {
  return props.items!.image || props.items!.show.img;
});
const click = () => {
  router.push('/detail/' + props.items!.iid);
};
</script>
<style lang="scss" scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: 0 0/14px 14px;
}
</style>
