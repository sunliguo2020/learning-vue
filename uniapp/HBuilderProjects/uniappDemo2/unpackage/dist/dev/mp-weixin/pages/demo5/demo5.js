"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_demo_child2 = common_vendor.resolveComponent("demo-child");
  _easycom_demo_child2();
}
const _easycom_demo_child = () => "../../components/demo-child/demo-child.js";
if (!Math) {
  _easycom_demo_child();
}
const _sfc_main = {
  __name: "demo5",
  setup(__props) {
    const child = common_vendor.ref(null);
    const update = function() {
      child.value.updateCount();
    };
    common_vendor.onMounted(() => {
      console.log(child.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(child, "dac63d88-0", {
          "k": "child"
        }),
        b: common_vendor.o(update)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/pages/demo5/demo5.vue"]]);
wx.createPage(MiniProgramPage);
