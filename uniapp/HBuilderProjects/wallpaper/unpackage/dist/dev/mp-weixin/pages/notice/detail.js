"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  _easycom_uni_dateformat2();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  _easycom_uni_dateformat();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      date: Date.now(),
      format: "yyyy-MM-dd hh:mm:ss"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f737f11"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/notice/detail.vue"]]);
wx.createPage(MiniProgramPage);
