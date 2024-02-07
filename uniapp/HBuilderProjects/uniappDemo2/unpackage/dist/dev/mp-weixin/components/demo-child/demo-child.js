"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-child",
  setup(__props, { expose }) {
    const count = common_vendor.ref(100);
    const updateCount = function() {
      count.value++;
    };
    expose({
      count,
      str: "咸虾米",
      updateCount
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(count.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/components/demo-child/demo-child.vue"]]);
wx.createComponent(Component);
