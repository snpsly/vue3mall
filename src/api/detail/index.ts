import request from '@/utils/request';
export function getDetailData(query: API.DetailId) {
  return request({
    url: '/detail/',
    params: query
  });
}
export function getRecommend() {
  return request({
    url: '/recommend'
  });
}
