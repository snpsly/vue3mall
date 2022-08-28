<template>
  <van-sticky :offset-top="46">
    <div class="tabcontrol">
      <div v-for="(item, index) in titles" @click="click(index)">
        <span :class="{ indexcolor: index === indexs }">{{ item }}</span>
      </div>
    </div></van-sticky
  >
</template>

<script>
export default {
  name: 'WorkspaceJsonTabControl',

  data() {
    return {
      indexs: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },

  mounted() {},

  methods: {
    click(index) {
      this.indexs = index;
      this.$emit('index', this.indexs);
    }
  }
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  background-color: white;
  line-height: 40px;
}
.tabcontrol > div {
  flex: 1;
}
span {
  display: inline-block;
  width: 50px;
  height: 35px;
}
.indexcolor {
  border-bottom: solid var(--color-tint) 3px;
  color: var(--color-tint);
}
</style>
