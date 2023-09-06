import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

let ajaxInit = false;
let httpRequest: any;
class HttpRequest {
  axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3000/api/',
      timeout: 6000,
    });
    this.axiosInstance.defaults.headers.common['Authorization'] = 'test';
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    // 添加请求拦截器
    this.axiosInstance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        // 如果有token，放在请求头中
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.token = token;
        }
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    this.axiosInstance.interceptors.response.use(
      function (response) {
        // 对响应数据做点什么
        // 获取响应头中的token
        const token = response.headers?.['token'];
        if (token) {
          localStorage.setItem('token', token);
        }
        return response;
      },
      function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  async get<T, D>(url: string, query?: T, config?: AxiosRequestConfig): Promise<any> {
    const res = await this.axiosInstance.get(url, { params: query, ...config });
    return res;
  }

  async post<T, D>(url: string, params?: T, config?: AxiosRequestConfig): Promise<any> {
    const res = await this.axiosInstance.post(url, params, config);
    return res;
  }
}

if (!ajaxInit) {
  httpRequest = new HttpRequest();
  ajaxInit = true;
}

export default httpRequest;
