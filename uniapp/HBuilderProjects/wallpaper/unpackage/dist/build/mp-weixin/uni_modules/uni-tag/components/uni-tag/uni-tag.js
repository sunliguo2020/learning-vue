"use strict";const t=require("../../../../common/vendor.js"),e={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes(){const{type:t,disabled:e,inverted:i,circle:n,mark:a,size:r,isTrue:s}=this;return["uni-tag--"+t,"uni-tag--"+r,s(e)?"uni-tag--disabled":"",s(i)?"uni-tag--"+t+"--inverted":"",s(n)?"uni-tag--circle":"",s(a)?"uni-tag--mark":"",s(i)?"uni-tag--inverted uni-tag-text--"+t:"","small"===r?"uni-tag-text--small":""].join(" ")}},methods:{isTrue:t=>!0===t||"true"===t,onClick(){this.isTrue(this.disabled)||this.$emit("click")}}};const i=t._export_sfc(e,[["render",function(e,i,n,a,r,s){return t.e({a:n.text},n.text?{b:t.t(n.text),c:t.n(s.classes),d:t.s(n.customStyle),e:t.o(((...t)=>s.onClick&&s.onClick(...t)))}:{})}],["__scopeId","data-v-6be53bd5"]]);wx.createComponent(i);
