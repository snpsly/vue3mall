import axios from 'axios';
const service = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/hy66',
  timeout: 6000
});
export type Response<T = any> = {
  _id: string;
  success: boolean;
  data: T;
  returnCode: string;
  returnMessage?: null;
};
export type BaseResponse<T = any> = Promise<T>;
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return err;
  }
);
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}
export default service;
