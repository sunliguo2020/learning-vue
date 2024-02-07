"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    common_vendor.index.showLoading({
      title: "加载中。。。",
      complete: function(res) {
        console.log("加载完成", res);
      }
    });
    setTimeout(() => {
      common_vendor.index.hideLoading();
    }, 2e3);
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
