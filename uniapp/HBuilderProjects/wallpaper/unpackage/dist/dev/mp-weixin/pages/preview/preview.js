"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
require("../../utils/request.js");
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
    const isScore = common_vendor.ref(false);
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
      currentInfo.value = picList.value[currentIndex.value];
      readImgsFun();
    });
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = picList.value[currentIndex.value];
      console.log("当前图片信息：", currentInfo.value);
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
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickScore = () => {
      console.log("评分弹窗", currentInfo.value);
      if (currentInfo.value.userScore) {
        isScore.value = true;
        userScore.value = currentInfo.value.userScore;
        console.log(userScore.value);
      }
      scorePopup.value.open("center");
      infoPopup.value.close();
    };
    const clickScoreClose = (e) => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      console.log(userScore.value);
      let {
        classid,
        _id: wallId
      } = currentInfo.value;
      let res = await api_apis.apiGetSetupScore({
        classid,
        wallId,
        userScore: userScore.value
      });
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        picList.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorageSync("storageClissList", picList.value);
        clickScoreClose();
      }
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
    const clickDownload = async function() {
      console.log("下载");
      try {
        common_vendor.index.showLoading({
          title: "下载中",
          mask: true
        });
        let {
          classid,
          _id: wallId
        } = currentInfo.value;
        const res = await api_apis.apiWriteDownload({
          classid,
          wallId
        });
        console.log("保存下载记录的接口", res);
        if (res.errCode != 0) {
          throw res;
        }
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picurl,
          success: (res2) => {
            console.log(res2.path);
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              success: (res3) => {
                console.log(res3);
                common_vendor.index.showToast({
                  title: "保存壁纸成功",
                  icon: "none"
                });
              },
              fail: (err) => {
                console.log(err);
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "保存失败，请重新点击下载",
                    icon: "none"
                  });
                } else {
                  common_vendor.index.showModal({
                    title: "授权提示",
                    content: "需要授权保存相册",
                    success: (res3) => {
                      if (res3.confirm) {
                        console.log("确认授权了");
                        common_vendor.index.openSetting({
                          success: (setting) => {
                            console.log(
                              setting
                            );
                            if (setting.authSetting["scope.writePhotosAlbum"]) {
                              common_vendor.index.showToast({
                                title: "获取授权成功",
                                icon: "none"
                              });
                            } else {
                              common_vendor.index.showToast({
                                title: "获取授权失败",
                                icon: "none"
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          },
          complete: () => {
            common_vendor.index.hideLoading();
          }
        });
      } catch (err) {
        console.log(err);
        common_vendor.index.hideLoading();
      }
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
        d: maskState.value
      }, maskState.value ? common_vendor.e({
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        g: common_vendor.o(goBack),
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(picList.value.length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        l: currentInfo.value
      }, currentInfo.value ? {
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
        }),
        s: common_vendor.o(clickDownload)
      } : {}) : {}, {
        t: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        v: common_vendor.o(clickInfoClose),
        w: currentInfo.value
      }, currentInfo.value ? {
        x: common_vendor.t(currentInfo.value._id),
        y: common_vendor.t(currentInfo.value.nickname),
        z: common_vendor.o(onChange),
        A: common_vendor.p({
          value: currentInfo.value.score
        }),
        B: common_vendor.t(currentInfo.value.score),
        C: common_vendor.t(currentInfo.value.description),
        D: common_vendor.f(currentInfo.value.tabs, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        E: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        F: common_vendor.p({
          type: "bottom"
        }),
        G: common_vendor.t(isScore.value ? "已经评过分了" : "壁纸评分"),
        H: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        I: common_vendor.o(clickScoreClose),
        J: common_vendor.o(() => {
        }),
        K: common_vendor.o(($event) => userScore.value = $event),
        L: common_vendor.p({
          ["allow-half"]: true,
          disabled: isScore.value,
          modelValue: userScore.value
        }),
        M: common_vendor.t(userScore.value),
        N: common_vendor.o(submitScore),
        O: !userScore.value || isScore.value,
        P: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        Q: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/preview/preview.vue"]]);
wx.createPage(MiniProgramPage);
