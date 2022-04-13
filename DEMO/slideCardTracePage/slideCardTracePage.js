/*
 * @Author: Liangbw
 * @Date: 2022-04-08 17:29:52
 * @LastEditors: Liangbw
 * @LastEditTime: 2022-04-11 18:13:34
 * @Description: 
 */
// 获取要操作的元素
let checkTrace=document.querySelector('.checkTrace');
let sy_productimg=document.querySelector('.sy-productimg');
let sy_productinfo=document.querySelector('.sy-productinfo');
let sy_traceInfo=document.querySelector('.sy-traceInfo');
let sy_container=document.querySelector('.swiper-container');

// 绑定标题点击事件
checkTrace.addEventListener('click',()=>{
    // 判断是否收起，收起才可以点击
    if(sy_traceInfo.classList.contains('slide-up')){
        console.log("show");
        checkTrace.innerHTML="收起溯源物流"
        sy_productimg.classList.add('slide-up');
        sy_productinfo.classList.add('slide-up');
        sy_traceInfo.classList.remove('slide-up');
        sy_container.classList.remove('slide-up');
        // console.log(sy_traceInfo);
    }else{
        console.log("close");
        checkTrace.innerHTML="查看溯源物流"
        sy_productimg.classList.remove('slide-up');
        sy_productinfo.classList.remove('slide-up');
        sy_traceInfo.classList.add('slide-up');
        sy_container.classList.add('slide-up');
        // console.log(sy_traceInfo);
    }
})