"use strict";const e=require("../../common/vendor.js"),m=require("../../common/assets.js"),t=require("../../utils/common.js");if(!Array){e.resolveComponent("uni-icons")()}Math;const i={__name:"theme-item",props:{isMore:{type:Boolean,default:!1},item:{type:Object,default:e=>({picurl:"../../common/images/more.jpg",name:"默认名称",updateTime:Date.now()})}},setup:i=>(e.computed((()=>{})),(o,s)=>e.e({a:!i.isMore},i.isMore?{}:e.e({b:i.item.picurl,c:e.t(i.item.name),d:e.unref(t.compareTimestamp)(i.item.updateTime)},e.unref(t.compareTimestamp)(i.item.updateTime)?{e:e.t(e.unref(t.compareTimestamp)(i.item.updateTime))}:{},{f:"/pages/classlist/classlist?id="+i.item._id+"&name="+i.item.name}),{g:i.isMore},i.isMore?{h:m._imports_0,i:e.p({type:"more-filled",size:"34",color:"#fff"})}:{}))},o=e._export_sfc(i,[["__scopeId","data-v-bd2e18ee"]]);wx.createComponent(o);
