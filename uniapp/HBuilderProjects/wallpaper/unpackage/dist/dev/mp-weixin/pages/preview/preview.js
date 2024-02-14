"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickScore = () => {
      scorePopup.value.open("center");
      infoPopup.value.close();
    };
    const clickScoreClose = (e) => {
      console.log(e);
      scorePopup.value.close();
    };
    const submitScore = () => {
    };
    const maskChange = () => {
      console.log(maskState);
      maskState.value = !maskState.value;
    };
    const onChange = function(e) {
      console.log("rate发生改变:" + JSON.stringify(e));
      userScore.value = e.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0,
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        g: common_vendor.o(() => _ctx.uni.navigateBack()),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        i: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        j: common_vendor.p({
          type: "info",
          size: "28"
        }),
        k: common_vendor.o(clickInfo),
        l: common_vendor.p({
          type: "star",
          size: "28"
        }),
        m: common_vendor.o(clickScore),
        n: common_vendor.p({
          type: "download",
          size: "23"
        })
      } : {}, {
        o: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        p: common_vendor.o(clickInfoClose),
        q: common_vendor.o(onChange),
        r: common_vendor.o(($event) => _ctx.rate_value = $event),
        s: common_vendor.p({
          disabled: true,
          modelValue: _ctx.rate_value
        }),
        t: common_vendor.t(_ctx.rate_value),
        v: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        w: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        x: common_vendor.p({
          type: "bottom"
        }),
        y: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        z: common_vendor.o(clickScoreClose),
        A: common_vendor.o(() => {
        }),
        B: common_vendor.o(($event) => userScore.value = $event),
        C: common_vendor.p({
          ["allow-half"]: true,
          modelValue: userScore.value
        }),
        D: common_vendor.t(userScore.value),
        E: common_vendor.o(submitScore),
        F: !userScore.value,
        G: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        H: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/preview/preview.vue"]]);
wx.createPage(MiniProgramPage);
