"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    common_vendor.index.setStorageSync("key", "产生的");
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/pages/demo3/demo3.vue"]]);
wx.createPage(MiniProgramPage);
