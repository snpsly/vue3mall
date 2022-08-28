declare namespace Index {
  type swiper = {
    image: string;
    link: string;
  };
  type recommend = {
    link: string;
    title: string;
    image: string;
  };
  type goods = {
    iid: string;
    title: string;
    price: string;
    cfav: number;
    image?: string;
    show: {
      img: string;
    };
  };
  type list = {
    pop: { data: goods[]; page: number };
    new: { data: goods[]; page: number };
    sell: { data: goods[]; page: number };
  };
  type listType = 'pop' | 'new' | 'sell';
}
