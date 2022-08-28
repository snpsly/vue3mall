<template>
  <div class="main">
    <van-pull-refresh v-model="loading" @refresh="onRefresh" :pull-distance="46"
      ><van-list
        :immediate-check="false"
        v-model:loading="loadinga"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <slot></slot> </van-list
    ></van-pull-refresh>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Toast } from 'vant';
const emits = defineEmits(['add']);
const add = () => {
  emits('add');
};
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

const loadinga = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
  setTimeout(() => {
    add();
    loadinga.value = false;
  }, 2000);
};
defineExpose({
  screenY
});
</script>
<style lang="scss" scoped>
.main {
  margin-top: 46px;
}
</style>
