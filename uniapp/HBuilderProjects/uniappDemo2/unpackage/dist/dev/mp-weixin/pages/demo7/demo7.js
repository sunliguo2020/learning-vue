"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo7",
  setup(__props) {
    common_vendor.onReachBottom(() => {
      console.log("onReachBottom到底了！");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(100, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9595efcd"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/pages/demo7/demo7.vue"]]);
wx.createPage(MiniProgramPage);
