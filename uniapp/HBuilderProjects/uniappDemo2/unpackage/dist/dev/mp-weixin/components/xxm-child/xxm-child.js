"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "xxm-child",
  emits: ["add"],
  setup(__props, { emit }) {
    function onClick() {
      emit("add", Math.random());
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/components/xxm-child/xxm-child.vue"]]);
wx.createComponent(Component);
