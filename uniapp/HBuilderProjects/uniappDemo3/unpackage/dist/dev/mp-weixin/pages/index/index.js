"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("首页");
    const show = function() {
      common_vendor.index.showToast({
        "title": "showToast",
        // "mask":true,
        duration: 3e3
      });
    };
    const hide = function() {
      common_vendor.index.hideToast();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(show),
        b: common_vendor.o(hide)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
