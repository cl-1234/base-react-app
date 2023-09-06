import { AxiosInstance } from 'axios';
import axios from 'axios';

let isInit: boolean = false;
let axiosInstance: AxiosInstance;
// 函数式请求写法
export const ajaxInit = () => {
  axiosInstance = axios.create({});
};
