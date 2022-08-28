<template>
  <div>
    <lazy-component
      ><img v-for="item in imglist" :src="item" alt="" @load="imgload" v-lazy="item"
    /></lazy-component>
  </div>
</template>

<script>
export default {
  name: 'Imglist',

  data() {
    return {};
  },
  props: {
    imglist: {
      type: Array,
      default: () => []
    }
  },

  mounted() {},

  methods: {
    imgload() {
      this.$emit('imgload');
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
