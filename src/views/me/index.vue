<template>
  <van-nav-bar title="登录" :fixed="true" />
  <van-form @submit="onSubmit" class="form-horizontal">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit" color="#ff8198">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Toast from '@/components/index';
const username = ref('');
const password = ref('');
const onSubmit = (values: number) => {
  Toast({ title: '0' });
};
</script>
<style lang="scss" scoped>
.van-nav-bar {
  --van-nav-bar-background-color: #ff8198;
  --van-nav-bar-title-text-color: white;
}
.form-horizontal {
  margin-top: 60px;
}
</style>
