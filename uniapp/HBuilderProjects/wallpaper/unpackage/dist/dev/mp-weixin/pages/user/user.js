"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userInfo = common_vendor.ref(null);
    const getUserInfo = async () => {
      let res = await api_apis.apiGetUserInfo();
      console.log("userInfo", res);
      userInfo.value = res.data;
    };
    getUserInfo();
    common_vendor.onLoad(() => {
      console.log("在onLoad中--");
    });
    common_vendor.onShow(() => {
      console.log("onShow---");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        b: userInfo.value
      }, userInfo.value ? {
        c: common_vendor.t(userInfo.value.IP),
        d: common_vendor.t(userInfo.value.address.country + "-" + userInfo.value.address.province + "-" + userInfo.value.address.city)
      } : {}, {
        e: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        f: common_vendor.t(userInfo.value.downloadSize),
        g: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        h: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        i: common_vendor.t(userInfo.value.scoreSize),
        j: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        k: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        l: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        m: common_vendor.p({
          type: "notification-filled",
          size: "20"
        }),
        n: common_vendor.p({
          type: "right",
          size: "15"
        }),
        o: common_vendor.p({
          type: "flag-filled",
          size: "20"
        }),
        p: common_vendor.p({
          type: "right",
          size: "15"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
