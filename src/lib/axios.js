import axios from "axios";
import { baseUrl } from "@/config";
import { getToken } from '@/lib/util'

class HttpRequest {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || baseUrl;
    this.queue = {}; 
  }


  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        // 
      }
    }
    return config
  }


  interceptors(instance, url) {

    // 请求拦截器
    instance.interceptors.request.use(config => {
      console.log(config);
      if (!Object.keys(this.queue).length) {
        // 全局 loading 
      }
      this.queue[url] = true
      config.headers["Authorization"] = getToken()
      // 全局 loading
      return config
    }, error => {
      delete this.queue[url];
      return Promise.reject(error);
    })

    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const { data } = res
      return data;
    }, error => {
      delete this.queue[url];
      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    // console.log(options, instance(options));
    // const instance = axios.create(options);
    this.interceptors(instance, options.url);
    return instance(options)
  }
}

export default HttpRequest;
