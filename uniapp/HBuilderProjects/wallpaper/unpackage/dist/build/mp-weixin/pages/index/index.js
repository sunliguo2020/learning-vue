"use strict";const e=require("../../common/vendor.js"),t=require("../../api/apis.js");if(require("../../utils/request.js"),!Array){(e.resolveComponent("custom-nav-bar")+e.resolveComponent("uni-icons")+e.resolveComponent("uni-dateformat")+e.resolveComponent("common-title")+e.resolveComponent("theme-item"))()}Math||((()=>"../../components/custom-nav-bar/custom-nav-bar.js")+(()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js")+(()=>"../../components/common-title/common-title.js")+(()=>"../../components/theme-item/theme-item.js"))();const a={__name:"index",setup(a){const i=e.ref([]),o=e.ref([]),n=e.ref([]),s=e.ref([]);return e.onShareAppMessage((e=>(console.log(e),{title:"咸虾米壁纸",path:"/pages/index/index"}))),e.onShareTimeline((()=>(console.log("分享到朋友圈"),{title:"咸虾米壁纸，好看的手机壁纸"}))),(async()=>{let e=await t.apiGetNotice();n.value=e.data})(),(async()=>{let e=await t.apiGetBanner();i.value=e.data})(),(async()=>{let e=await t.apiGetRandomList();o.value=e.data})(),(async()=>{let e=await t.apiGetClassify({pageSize:8});console.log(e),s.value=e.data})(),(t,a)=>({a:e.p({title:"推荐"}),b:e.f(i.value,((t,a,i)=>e.e({a:"miniProgram"==t.target},"miniProgram"==t.target?{b:t.picurl,c:t.url,d:t.appid}:{e:t.picurl,f:"/pages/classlist/classlist?"+t.url},{g:t._id}))),c:e.p({type:"sound-filled",size:"20",color:"#28b389"}),d:e.f(n.value,((t,a,i)=>({a:e.t(t.title),b:`/pages/notice/detail?id=${t._id}`,c:t._id}))),e:e.p({type:"right",size:"16",color:"#28b389"}),f:e.p({type:"calendar",size:"18",color:"#28b389"}),g:e.p({date:Date.now(),format:"dd日"}),h:e.f(o.value,((t,a,i)=>({a:t.smallPicurl,b:t._id,c:e.o((a=>{return i=t._id,e.index.setStorageSync("storageClissList",o.value),void e.index.navigateTo({url:"/pages/preview/preview?id="+i});var i}),t._id)}))),i:e.f(s.value,((t,a,i)=>({a:t._id,b:"743e3240-7-"+i,c:e.p({item:t})}))),j:e.p({isMore:!0})})}},i=e._export_sfc(a,[["__scopeId","data-v-743e3240"]]);a.__runtimeHooks=6,wx.createPage(i);