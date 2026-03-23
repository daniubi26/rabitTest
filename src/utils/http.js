//axios基础的封装
import axios from "axios";

const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //1.当发送网络请求时, 在页面中添加一个loading组件, 在loading组件中添加一个 Spin 旋转图标
    //2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    //3.params/data序列化的操作
    return config
}, err => {
    return Promise.reject(err)
})
//axios响应式拦截器
httpInstance.interceptors.response.use(res => {

    return res.data
}, err => {
    return Promise.reject(err)
})

export default httpInstance