"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_uni_tag2 + _easycom_uni_dateformat2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_dateformat)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const detail = common_vendor.ref({});
    common_vendor.onLoad((e) => {
      console.log(e);
      let id = e.id;
      getNoticeDetail(id);
    });
    const getNoticeDetail = async (id) => {
      let res = await api_apis.apiGetNoticeDetail({
        id
      });
      console.log(res);
      detail.value = res.data;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: detail.value.select
      }, detail.value.select ? {
        b: common_vendor.p({
          text: "置顶",
          type: "error",
          circle: true,
          inverted: true
        })
      } : {}, {
        c: common_vendor.t(detail.value.title),
        d: common_vendor.t(detail.value.author),
        e: common_vendor.p({
          date: detail.value.publish_date,
          format: "yyyy-MM-dd hh:mm:ss"
        }),
        f: common_vendor.t(detail.value.view_count),
        g: detail.value.content
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f737f11"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/wallpaper/pages/notice/detail.vue"]]);
wx.createPage(MiniProgramPage);
