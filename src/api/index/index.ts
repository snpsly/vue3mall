import request from '@/utils/request';
import type { BaseResponse } from '@/utils/request';
export function getHomeMultiData() {
  return request({
    method: 'get',
    url: '/home/multidata'
  });
}
export function getHomeGoods(query: API.Menu) {
  return request({
    url: '/home/data',
    params: query
  });
}
