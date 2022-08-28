<template>
  <div>
    <goods-list-item v-for="item in List[listtype].data" :items="item"></goods-list-item>
  </div>
</template>
<script lang="ts" setup>
import { getHomeGoods } from '@/api/index/index';
import { ref, onMounted } from 'vue';
import GoodsListItem from './GoodsListItem.vue';
const emits = defineEmits(['comlist']);
const comlist = () => {
  emits('comlist');
};
const List = ref<Index.list>({
  pop: { data: [], page: 0 },
  new: { data: [], page: 0 },
  sell: { data: [], page: 0 }
});
let listtype = ref<Index.listType>('pop');
const getList = async (type: Index.listType) => {
  const page = ++List.value[type].page;
  const query = {
    type: type,
    page: page
  };
  const { data } = await getHomeGoods(query);
  List.value[type].data.push(...data.list);
  comlist();
};
onMounted(() => {
  getList('pop');
  getList('new');
  getList('sell');
});
defineExpose({
  listtype,
  getList
});
</script>
<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);
  padding: 2px;
}
</style>
