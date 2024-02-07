"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_life_demo2 = common_vendor.resolveComponent("life-demo");
  _easycom_life_demo2();
}
const _easycom_life_demo = () => "../../components/life-demo/life-demo.js";
if (!Math) {
  _easycom_life_demo();
}
const _sfc_main = {
  __name: "demo4",
  setup(__props) {
    const scroll = common_vendor.ref(null);
    console.log(scroll.value);
    common_vendor.onMounted(() => {
      console.log(scroll.value);
    });
    const show = common_vendor.ref(true);
    setTimeout(() => {
      show.value = false;
    }, 2e3);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: show.value
      }, show.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/pages/demo4/demo4.vue"]]);
wx.createPage(MiniProgramPage);
