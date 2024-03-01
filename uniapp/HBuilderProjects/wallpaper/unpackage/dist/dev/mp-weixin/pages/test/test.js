"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "test",
  setup(__props) {
    common_vendor.ref(0);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-727d09f0"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/test/test.vue"]]);
wx.createPage(MiniProgramPage);
