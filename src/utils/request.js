//  导出一个调用
// 发起请求的工具函数
// 配置 axios 使用配置好的axios 来发请求
// 处理 js 最大安全数值
// 每次请求  带 token
//  响应 失败  token失效
import axios from 'axios'
import JSONBIGINT from 'json-bigint'
import store from '@/store'

const instance = axios.create({
  // 后台接口的基准地址
  baseURL: 'http://ttapi.research.itcast.cn/',
  // 转化原始数据格式
  //  最大安全数值
  transformResponse: [(data) => {
    try {
      return JSONBIGINT.parse(data)
    } catch (e) {
      return data
    }
  }]

})

//  请求拦截器
instance.interceptors.request.use(config => {
  // 设置  请求头
  //  修改请求的配置 获取 token 配置 token
  if (store.state.user.token) {
    // 设置请求头
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
},
// 错误
err => Promise.reject(err))

// 设置响应拦截器
// 接收 响应后的数据
instance.interceptors.response.use(res => {
  try {
    return res.data.data
  } catch (e) {
    return res
  }
}, err => Promise.reject(err))

//  导出 一个使用配置好的axios来发送 气球函数
// 地址  方法  参数
export default (url, method, data) => {
  return instance({
    url,
    method,
    //  写任意的表达式  表达式返回结果一定要是字符串类型
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data

  })
}

//  初步封装完成
