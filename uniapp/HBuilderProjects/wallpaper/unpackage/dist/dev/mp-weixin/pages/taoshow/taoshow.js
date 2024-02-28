"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "taoshow",
  setup(__props) {
    const taoShowObj = common_vendor.ref([]);
    const getTaoShowObj = async () => {
      const res = await api_apis.apiTaoShow({ size: 10 });
      taoShowObj.value = [...taoShowObj.value, ...res.data];
      console.log(taoShowObj.value);
    };
    getTaoShowObj();
    common_vendor.onReachBottom(() => {
      console.log("触底了");
      getTaoShowObj();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(taoShowObj.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.shop),
            c: common_vendor.t(item.comment),
            d: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10faca1d"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/taoshow/taoshow.vue"]]);
wx.createPage(MiniProgramPage);
