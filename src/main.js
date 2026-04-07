

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入懒加载指令插件，并且注册
import { lazyPlugin } from '@/directives/index'

//引入初始化的样式文件
import '@/styles/common.scss'

//引入全局组件插件
import { componentPlugin } from '@/components'




const pinia = createPinia()


const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')

