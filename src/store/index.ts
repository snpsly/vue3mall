import { defineStore } from 'pinia';

// 1.定义并导出容器
//参数1:容器的ID,必须唯一,将来pinia会把所有的容器挂载到根容器
//参数2:选项对象
//返回值:一个函数,调用得到容器实例
export const useMainStore = defineStore('main', {
  /**
   * 类似组件的data,用来储存全局状态的
   * 1.必须是函数:这样是为了服务端渲染的时候避免交叉请求导致的数据状态污染
   * 2.必须是箭头函数
   */
  state: () => {
    return {
      pagey: 0,
      shopcart: <detail.cartype[]>[],
      sum: 0
    };
  },
  /**
   * 类似于组件的computed,用来封装计算属性,有缓存的功能
   */
  getters: {},
  /**
   * 类似于组件的methods,封装业务逻辑,修改state
   */
  actions: {
    addCart(shop: detail.cartype) {
      return new Promise<string>((resolve, reject) => {
        const found = this.shopcart.find((el) => el.iid === shop.iid);
        console.log(found);

        if (found !== undefined && found.count) {
          found.count++;
          resolve('当前商品数量+1');
        } else {
          shop.count = 1;
          shop.check = true;
          this.shopcart.push(shop);
          resolve('已添加到购物车');
        }
      });
    }
  }
});
