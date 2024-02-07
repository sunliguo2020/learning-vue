"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5",
  setup(__props) {
    (function request() {
      common_vendor.index.showLoading({});
      common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          id: 1
        },
        timeout: 1e3,
        method: "get",
        success: (res) => {
          console.log(res);
        },
        fail: (err) => {
          console.log("超时");
          console.log(err);
        },
        complete: () => {
          common_vendor.index.hideLoading();
        }
      });
    })();
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/pages/demo5/demo5.vue"]]);
wx.createPage(MiniProgramPage);
