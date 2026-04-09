//axios基础的封装
import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/user"
import router from "@/router";

const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})



//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //1.从pinia获取token
    const userStore = useUserStore()
    //2.按照后端要求拼接token数据
    const token = userStore.userInfo.token

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

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
    const userStore = useUserStore()
    //统一错误提示
    ElMessage({
        type:'warning',
        message:err.response.data.message
    })
    //401token失效处理
    //1.清楚本地数据
    //2.跳转到登录页面
    if(err.response.status === 401){
        userStore.clearUserInfo()
        router.push('/login')
    }

    return Promise.reject(err)
})

export default httpInstance