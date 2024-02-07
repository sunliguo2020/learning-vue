"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    const onClick = function() {
      common_vendor.index.navigateTo({
        url: "/pages/demo2/demo2?name=张三&age=18&hot=篮球"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClick)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/pages/demo/demo.vue"]]);
wx.createPage(MiniProgramPage);
