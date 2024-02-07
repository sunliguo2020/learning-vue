"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "life-demo",
  setup(__props) {
    common_vendor.onUnmounted(() => {
      console.log("子组件被卸载");
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/components/life-demo/life-demo.vue"]]);
wx.createComponent(Component);
