"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "test",
  setup(__props) {
    common_vendor.ref(0);
    const formSubmit = function(e) {
      console.log("form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value));
      console.log(e.detail.value);
      console.log(+e.detail.value.age);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(formSubmit),
        b: common_vendor.o((...args) => _ctx.formReset && _ctx.formReset(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-727d09f0"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/test/test.vue"]]);
wx.createPage(MiniProgramPage);
