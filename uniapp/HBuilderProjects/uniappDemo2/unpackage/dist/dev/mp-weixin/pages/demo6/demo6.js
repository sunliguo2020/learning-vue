"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6",
  setup(__props) {
    const fixed = common_vendor.ref(false);
    common_vendor.onLoad((e) => {
      console.log("onload函数");
      console.log("我是参数e:", e);
    });
    common_vendor.onReady(() => {
      console.log(scroll.value);
    });
    common_vendor.onShow(() => {
      console.log("onShow函数");
    });
    common_vendor.onHide(() => {
      console.log("onHide函数");
    });
    common_vendor.onUnload(
      () => {
        console.log("onUnload被调用");
      }
    );
    common_vendor.onPageScroll((e) => {
      console.log(e);
      fixed.value = e.scrollTop > 200;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(100, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        b: fixed.value
      }, fixed.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a71c84cf"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/pages/demo6/demo6.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
