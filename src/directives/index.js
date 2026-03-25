import { useIntersectionObserver } from '@vueuse/core'

//定义懒加载插件
export const lazyPlugin ={
    install(app){
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定的那个元素img
                //binding:binding.value 指令等于号后面绑定的value值
                console.log(el, binding.value)
                const { stop }=useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            //进入视口区域
                            el.src = binding.value
                            //赋予有效图片地址

                            //停止
                            stop()
                        }
                    },
                )
            }
        })
    }
}