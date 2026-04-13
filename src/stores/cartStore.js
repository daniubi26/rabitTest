//封装购物车模块

import { all } from 'axios'
import { ElStep } from 'element-plus'
import { ca } from 'element-plus/es/locale/index.mjs'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore=defineStore('cart',()=>{ 
    //1.定义state -cartList
    const cartList = ref([])

    //2.定义action -addCart
    const addCart=(goods)=>{
        //添加购物车操作

        //已添加过 -count +1 

        //没有添加过，直接push
        const item=cartList.value.find((item)=>goods.skuId===item.skuId)
        if(item){
            item.count++
        }else{
            cartList.value.push(goods)
        }
    }
    const delCart=(skuId)=>{
        //思路：1.找到要删除项的下标值-splice
        //2.使用数组的过滤方法 -filter
        const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
        cartList.value.splice(idx,1)
    }

    //计算属性
    //1.总的数量
    const allCount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    //2.总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count*c.price, 0))
    return{
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart
    }
},{
    persist:true
})