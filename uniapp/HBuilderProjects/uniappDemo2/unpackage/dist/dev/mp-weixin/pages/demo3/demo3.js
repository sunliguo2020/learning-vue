"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_xxm_child2 = common_vendor.resolveComponent("xxm-child");
  _easycom_xxm_child2();
}
const _easycom_xxm_child = () => "../../components/xxm-child/xxm-child.js";
if (!Math) {
  _easycom_xxm_child();
}
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    const num = common_vendor.ref("");
    const onAdd = function(e) {
      console.log(e);
      num.value = e;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onAdd),
        b: common_vendor.t(num.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/pages/demo3/demo3.vue"]]);
wx.createPage(MiniProgramPage);
