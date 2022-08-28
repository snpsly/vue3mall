export const gotop = () => {
  let top = document.documentElement.scrollTop; //获取点击时页面的滚动条纵坐标位置
  const timeTop = setInterval(() => {
    document.documentElement.scrollTop = top -= 50; //一次减50往上滑动
    if (top <= 0) {
      clearInterval(timeTop);
    }
  }, 5); //定时调用函数使其更顺滑
};
