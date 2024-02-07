"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_xxm_layout2 = common_vendor.resolveComponent("xxm-layout");
  _easycom_xxm_layout2();
}
const _easycom_xxm_layout = () => "../../components/xxm-layout/xxm-layout.js";
if (!Math) {
  _easycom_xxm_layout();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("王五");
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "F:/github/learning-vue/uniapp/HBuilderProjects/uniappDemo2/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
