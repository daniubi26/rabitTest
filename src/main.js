

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入初始化的样式文件
import '@/styles/common.scss'

//引入vue-use
import { useIntersectionObserver } from '@vueuse/core'

const pinia = createPinia()


const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        //el:指令绑定的那个元素img
        //binding:binding.value 指令等于号后面绑定的value值
        console.log(el,binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }])=>{
                console.log(isIntersecting)
                if(isIntersecting){
                    //进入视口区域
                    el.src = binding.value
                    //赋予有效图片地址
                }
            },
        )
    }
})
