

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入初始化的样式文件
import '@/styles/common.scss'

const pinia = createPinia()


const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
