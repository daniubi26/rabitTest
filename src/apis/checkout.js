import httpInstance from "@/utils/http"


//获取详情得接口
export const getCheckInfoAPI=()=>{
    return httpInstance({
        url:'/member/order/pre'
    })
}