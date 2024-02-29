"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "taoshow",
  setup(__props) {
    const taoShowObj = common_vendor.ref([]);
    const swiperCurrent = common_vendor.ref(0);
    common_vendor.onShow(() => {
      common_vendor.index.getNetworkType({
        success(res) {
          console.log("获取网络类型为:", res);
          common_vendor.index.showToast({
            title: "网络类型" + res.networkType,
            icon: "none"
          });
        },
        fail: (err) => {
          console.log("获取网络类型失败", err);
        }
      });
    });
    const getTaoShowObj = async () => {
      const res = await api_apis.apiTaoShow({
        size: 10
      });
      taoShowObj.value = res.data;
      console.log(taoShowObj.value);
    };
    common_vendor.onLoad((e) => {
      console.log("onLoad执行");
      getTaoShowObj();
    });
    common_vendor.onReachBottom(() => {
      console.log("触底了");
      getTaoShowObj();
    });
    const swiperDone = function(e) {
    };
    const swiperChange = function(e) {
      console.log("当前current值为", e.detail.current);
      var buyer_reviews_images_count = taoShowObj.value.length;
      console.log("当前数据量", buyer_reviews_images_count);
      if (e.detail.current + 1 >= buyer_reviews_images_count) {
        console.log("准备获取新数据");
        getTaoShowObj();
      }
    };
    common_vendor.onShareAppMessage((res) => {
      console.log("onShareAppMessage", res);
      if (res.from == "menu") {
        return {
          "title": "买家秀",
          path: "pages/taoshow/taoshow"
        };
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(taoShowObj.value, (item, index, i0) => {
          return {
            a: item.url,
            b: index
          };
        }),
        b: swiperCurrent.value,
        c: common_vendor.o(swiperDone),
        d: common_vendor.o(swiperChange)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10faca1d"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/taoshow/taoshow.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
