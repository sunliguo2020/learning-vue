"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const picList = common_vendor.ref([]);
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(0);
    const currentInfo = common_vendor.ref(null);
    const readImgs = common_vendor.ref([]);
    const storageClissList = common_vendor.index.getStorageSync("storageClissList");
    picList.value = storageClissList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    console.log("storageClissList", storageClissList);
    common_vendor.onLoad((e) => {
      currentId.value = e.id;
      currentIndex.value = picList.value.findIndex((item) => item._id === currentId.value);
      console.log("currentIndex", currentIndex.value, picList.value[currentIndex.value]);
      console.log("currentId", currentId.value);
      currentInfo.value = picList.value[currentIndex.value];
      console.log(currentInfo.value);
      readImgsFun();
    });
    console.log("waibian", currentId.value, currentIndex.value);
    const swiperChange = (e) => {
      console.log("触发swiperChange", e.detail.source);
      console.log("e.detail.current", e.detail.current);
      currentIndex.value = e.detail.current;
      console.log("currentIndex:", currentIndex.value, picList.value[currentIndex.value]);
      currentInfo.value = picList.value[currentIndex.value];
      readImgsFun();
    };
    function readImgsFun() {
      readImgs.value.push(
        currentIndex.value <= 0 ? picList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value >= picList.value.length - 1 ? 0 : currentIndex.value + 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    }
    console.log(picList.value);
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
      console.log(userScore.value);
      console.log(userScore);
    };
    const maskChange = () => {
      console.log(maskState);
      maskState.value = !maskState.value;
    };
    const onChange = function(e) {
      console.log("rate发生改变:" + JSON.stringify(e));
      userScore.value = e.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(picList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        b: common_vendor.o(swiperChange),
        c: currentIndex.value,
        d: common_vendor.t(readImgs.value),
        e: maskState.value
      }, maskState.value ? {
        f: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        g: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        h: common_vendor.o(goBack),
        i: common_vendor.t(currentIndex.value + 1),
        j: common_vendor.t(picList.value.length),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        l: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        m: common_vendor.p({
          type: "info",
          size: "28"
        }),
        n: common_vendor.o(clickInfo),
        o: common_vendor.p({
          type: "star",
          size: "28"
        }),
        p: common_vendor.t(currentInfo.value.score),
        q: common_vendor.o(clickScore),
        r: common_vendor.p({
          type: "download",
          size: "23"
        })
      } : {}, {
        s: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        t: common_vendor.o(clickInfoClose),
        v: common_vendor.t(currentInfo.value._id),
        w: common_vendor.t(currentInfo.value.nickname),
        x: common_vendor.o(onChange),
        y: common_vendor.p({
          value: currentInfo.value.score
        }),
        z: common_vendor.t(currentInfo.value.score),
        A: common_vendor.t(currentInfo.value.description),
        B: common_vendor.f(currentInfo.value.tabs, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        C: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        D: common_vendor.p({
          type: "bottom"
        }),
        E: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        F: common_vendor.o(clickScoreClose),
        G: common_vendor.o(() => {
        }),
        H: common_vendor.o(($event) => userScore.value = $event),
        I: common_vendor.p({
          ["allow-half"]: true,
          modelValue: userScore.value
        }),
        J: common_vendor.t(userScore.value),
        K: common_vendor.o(submitScore),
        L: !userScore.value,
        M: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        N: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/preview/preview.vue"]]);
wx.createPage(MiniProgramPage);
