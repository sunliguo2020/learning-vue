"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  const _component_uni_load_more = common_vendor.resolveComponent("uni-load-more");
  (_component_uni_icons + _component_uni_load_more)();
}
const _sfc_main = {
  __name: "requestDemo",
  setup(__props) {
    const arrs = common_vendor.ref([]);
    function network() {
      common_vendor.index.showNavigationBarLoading();
      common_vendor.index.request({
        url: "https://api.thecatapi.com/v1/images/search",
        data: {
          limit: 10
        },
        success: (res) => {
          console.log(res);
          if (res.statusCode === 200) {
            arrs.value = [...arrs.value, ...res.data];
          } else {
            common_vendor.index.showToast({
              title: "接口返回错误"
            });
          }
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "请求资源加载失败"
          });
          console.log("请求资源加载失败");
        },
        complete: () => {
          common_vendor.index.hideNavigationBarLoading();
          common_vendor.index.stopPullDownRefresh();
        },
        timeout: 15e3
      });
    }
    network();
    const previewPic = function(index) {
      console.log(index);
      console.log(arrs.value);
      const urls = arrs.value.map((item) => {
        return item.url;
      });
      console.log(urls);
      common_vendor.index.previewImage({
        urls,
        current: index
      });
    };
    const onRefresh = function() {
      console.log("点击刷新");
      common_vendor.index.startPullDownRefresh({});
    };
    const onTop = () => {
      console.log("跳到开头");
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 100
      });
    };
    common_vendor.onReachBottom(() => {
      console.log("触底更新");
      network();
      console.log(arrs.value);
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("下拉刷新!");
      arrs.value = [];
      network();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(arrs), (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => previewPic(index), item.id),
            c: common_vendor.t(item.id),
            d: item.id
          };
        }),
        b: common_vendor.p({
          type: "refreshempty",
          size: "30"
        }),
        c: common_vendor.o(onRefresh),
        d: common_vendor.p({
          type: "up",
          size: "30"
        }),
        e: common_vendor.o(onTop),
        f: common_vendor.p({
          status: "loading"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e25b1ed9"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo3/pages/requestDemo/requestDemo.vue"]]);
wx.createPage(MiniProgramPage);
