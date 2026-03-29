//封装分类数据业务相关代码

import { ref } from 'vue'
import { getCategoryAPI } from "../../../apis/category"
import { onBeforeRouteUpdate } from "vue-router"
import { useRoute }from "vue-router"
export function useCategory() { 

    //获取数据
    const categoryData=ref({})

    const route=useRoute()

    //目标期望：路由参数变化的时候，可以把分类数据接口重新发送
    const getCategory = async (id=route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value=res.result
    }

    onBeforeRouteUpdate((to)=>{
        console.log("路由更新了")
        //存在问题：使用最新的路由参数请求最新的分类数据
        console.log(to);
        getCategory(to.params.id)
    })

    getCategory()

    return{
        categoryData
    }
}